class Buttons {
  /**
   * Imports main index file of the package
   * @param {import('../InteractionListener')} caller
   */
  constructor(caller) {
    this.bot = caller.bot;
    this.constants = caller.constants;
    this.logger = caller.logger;
  }

  /**
   * Makes new action row with up to 5 buttons
   * @param {number} number amount of buttons (limit 5)
   * @param {Array} label Array of labels
   * @param {Array} style Array of style
   * @param {Array} custom_ID Array of custom ids
   * @returns {Array} Array of new Buttons
   * @memberof Buttons
   */
  addActionRowButtons(number, labels, styles, customIDs) {
    const newButtons = [
      {
        type: 1,
        components: [],
      },
    ];

    if (number > 5) return this.logger.error("You can't have more than 5 buttons per Action Row");
    if (number > labels.length) return this.logger.error("You're missing labels in your array");
    if (number < labels.length) return this.logger.error('You have too many labels in your array');
    if (number > styles.length) return this.logger.error("You're missing styles in your array");
    if (number < styles.length) return this.logger.error('You have too many styles in your array');
    if (number > customIDs.length) return this.logger.error("You're missing customIDs in your array");
    if (number < customIDs.length) return this.logger.error('You have too many customIDs in your array');

    for (let i = 0; i < number; i++) {
      newButtons[0].components.push({
        type: 2,
        label: labels[i],
        style: this.constants.style[styles[i]],
        custom_id: customIDs[i],
      });
    }

    return newButtons;
  }

  /**
   * Makes new buttons
   * @param {number} number amount of buttons (limit 5)
   * @param {Array} label Array of labels
   * @param {Array} style Array of style
   * @param {Array} custom_ID Array of custom ids
   * @returns {Object} Object of new Buttons
   * @memberof Buttons
   */
  addButtons(number, labels, styles, customIDs) {
    const newButtons = [];

    if (number > 5) return this.logger.error("You can't have more than 5 buttons per Action Row");
    if (number > labels.length) return this.logger.error("You're missing labels in your array");
    if (number < labels.length) return this.logger.error('You have too many labels in your array');
    if (number > styles.length) return this.logger.error("You're missing styles in your array");
    if (number < styles.length) return this.logger.error('You have too many styles in your array');
    if (number > customIDs.length) return this.logger.error("You're missing customIDs in your array");
    if (number < customIDs.length) return this.logger.error('You have too many customIDs in your array');

    for (let i = 0; i < number; i++) {
      newButtons.push({
        type: 2,
        label: labels[i],
        style: this.constants.style[styles[i]],
        custom_id: customIDs[i],
      });
    }

    // const buttonObject = {}
    // for (let i = 0; i < number; i++) {
    //     if (newButtons[i] !== undefined) buttonObject[i] = newButtons[i];
    // }

 

    return newButtons;
  }

  /**
   * Makes new URL buttons
   * @param {number} number amount of buttons (limit 5)
   * @param {Array} label Array of labels
   * @param {Array} urls Array of custom ids
   * @returns {Array} Array of new Buttons
   * @memberof Buttons
   */
  addURLButtons(number, labels, urls) {
    const newButtons = [];

    if (number > 5) return this.logger.error("You can't have more than 5 buttons per Action Row");
    if (number > labels.length) return this.logger.error("You're missing labels in your array");
    if (number < labels.length) return this.logger.error('You have too many labels in your array');
    if (number > urls.length) return this.logger.error("You're missing urls in your array");
    if (number < urls.length) return this.logger.error('You have too many urls in your array');

    for (let i = 0; i < number; i++) {
      newButtons.push({
        type: 2,
        label: labels[i],
        style: this.constants.styles['url'],
        url: urls[i],
      });
    }

    return newButtons;
  }
}

module.exports = Buttons;
