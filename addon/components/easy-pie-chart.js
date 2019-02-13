import Component from '@ember/component';
import { observer } from '@ember/object'
import layout from '../templates/components/easy-pie-chart';
import EasyPieChart from 'easy-pie-chart'

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['easy-pie-chart'],
  easyPieChart: null,
  attributeBindings: ['percent:data-percent'],
  percent: 0,
  animation: true,
  symbol: '%',

  updatePercent: observer('percent', function() {
    const percent = this.get('percent');

    const easyPieChart = this.get('easyPieChart');
    easyPieChart.update(percent);
  }),

  toggleAnimation: observer('animation', function() {
    const isEnabled = this.get('animation');
    if (isEnabled) {
      this.get('easyPieChart').enableAnimation();
    } else {
      this.get('easyPieChart').disableAnimation();
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    const options = this.getProperties(
        'barColor', 'trackColor', 'scaleColor', 'scaleLength',
        'lineCap', 'lineWidth' , 'trackWidth', 'size', 'rotate',
        'animate', 'easing', 'onStart', 'onStop', 'onStep'
    );

    const element = new EasyPieChart(this.element, options);

    this.set('easyPieChart', element);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.destroy();
  }
});