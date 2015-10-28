/**
 * Blend Mode VM
 */

let blendData = {
  current: 'hard-light',
  values: [
    'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
    'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
    'exclusion', 'hue', 'saturation', 'color', 'luminosity'
  ],
};

export default Vue.extend({
  data() { return blendData; },
  template: '#blend',
  props: ['str'],
  methods: {

    /**
     * Reset blend mode to 'normal'
     */
    reset() {
      this.current = this.values[0];
    },

    /**
     * Calculate blend styles for main VM
     */
    compileStyle() {
      this.str = `background-blend-mode: ${this.current}; `;
    },
  },
  watch: {
    'current'() {this.compileStyle();}
  },
  ready() {this.compileStyle();},
});
