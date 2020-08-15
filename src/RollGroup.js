import { RequiredArgumentError } from './exceptions/index.js';
import { Modifier } from './modifiers/index.js';
import { StandardDice } from './dice/index.js';

const modifiersSymbol = Symbol('modifiers');
const expressionsSymbol = Symbol('expressions');

/**
 * A `RollGroup`
 */
class RollGroup {
  /**
   * Create a `RollGroup` instance.
   *
   * @param {Array.<Array.<StandardDice|string|number>>} [expressions] List of expressions
   * @param {Map<string, Modifier>|Modifier[]|{}|null} [modifiers] The modifiers that affect the
   * group
   */
  constructor(expressions = [], modifiers = []) {
    this.expressions = expressions;
    this.modifiers = modifiers;
  }

  /**
   * The expressions in this group.
   *
   * @returns {Array.<Array.<StandardDice|string|number>>}
   */
  get expressions() {
    return [...(this[expressionsSymbol] || [])];
  }

  /**
   * Set the expressions.
   *
   * @param {Array.<Array.<StandardDice|string|number>>} expressions
   */
  set expressions(expressions) {
    if (!expressions) {
      throw new RequiredArgumentError('expressions');
    }

    if (!Array.isArray(expressions)) {
      throw new TypeError(`expressions must be an array: ${expressions}`);
    }

    if (expressions.length === 0) {
      throw new TypeError(`expressions cannot be empty: ${expressions}`);
    }

    expressions.forEach((e) => {
      if (!e || !Array.isArray(e)) {
        throw new TypeError(`expressions must be an array of arrays: ${expressions}`);
      }

      if (e.length === 0) {
        throw new TypeError(`Sub expressions cannot be empty: ${expressions}`);
      }
    });

    // loop through each expression and add it to the list
    this[expressionsSymbol] = [];
    expressions.forEach((expression) => {
      this[expressionsSymbol].push(expression);
    });
  }

  /**
   * The modifiers that affect the object.
   *
   * @returns {Map<string, Modifier>|null}
   */
  get modifiers() {
    if (this[modifiersSymbol]) {
      // ensure modifiers are ordered correctly
      return new Map([...this[modifiersSymbol]].sort((a, b) => a[1].order - b[1].order));
    }

    return null;
  }

  /**
   * Sets the modifiers that affect this group.
   *
   * @param {Map<string, Modifier>|Modifier[]|{}|null} value
   *
   * @throws {TypeError} Modifiers should be a Map, array of Modifiers, or an Object
   */
  set modifiers(value) {
    let modifiers;
    if (value instanceof Map) {
      modifiers = value;
    } else if (Array.isArray(value)) {
      // loop through and get the modifier name of each item and use it as the map key
      modifiers = new Map(value.map((modifier) => [modifier.name, modifier]));
    } else if (typeof value === 'object') {
      modifiers = new Map(Object.entries(value));
    } else {
      throw new TypeError('modifiers should be a Map, array, or an Object containing Modifiers');
    }

    if (
      modifiers.size
      && [...modifiers.entries()].some((entry) => !(entry[1] instanceof Modifier))
    ) {
      throw new TypeError('modifiers must only contain Modifier instances');
    }

    this[modifiersSymbol] = modifiers;
  }

  /**
   * The group notation. e.g. `{4d6, 2d10+3}k1`.
   *
   * @returns {string}
   */
  get notation() {
    // @todo build notation from expressions
    let notation = this.expressions
      .map((expression) => expression.reduce((acc, e) => acc + e, ''))
      .join(', ');

    notation = `{${notation}}`;

    if (this.modifiers && this.modifiers.size) {
      notation += [...this.modifiers.values()].reduce((acc, modifier) => acc + modifier.notation, '');
    }

    return notation;
  }

  roll() {
    const rollResults = this.expressions.map((expression) => {
      if (expression instanceof StandardDice) {
        // roll the object and return the value
        return expression.roll();
      }

      return null;
    }).filter(Boolean);

    // loop through each modifier and carry out its actions
    (this.modifiers || []).forEach((modifier) => {
      modifier.run(rollResults, this);
    });

    return rollResults;
  }

  /**
   * Return an object for JSON serialising.
   *
   * This is called automatically when JSON encoding the object.
   *
   * @returns {{
   *  notation: string,
   *  modifiers: (Map<string, Modifier>|null),
   *  type: string,
   *  expressions: StandardDice[]
   * }}
   */
  toJSON() {
    const { modifiers, notation, expressions } = this;

    return {
      expressions,
      modifiers,
      notation,
      type: 'group',
    };
  }

  /**
   * Return the String representation of the object.
   *
   * This is called automatically when casting the object to a string.
   *
   * @see {@link RollGroup#notation}
   *
   * @returns {string}
   */
  toString() {
    return this.notation;
  }
}

export default RollGroup;
