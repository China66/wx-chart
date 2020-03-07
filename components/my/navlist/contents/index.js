import config from '../../../../config';    
const app = getApp();
Component({
  properties: {
    contentdata:{
      type: Object,
      value: {
		  navdefault:''
	  }
    }
  },
  data: {}, 
  ready: function() {
    let _that = this;
	console.log('4444',_that.data.contentdata['navdefault'])
	console.log('儿子的儿子',_that.data.contentdata['navdefault'])
  },
  attached: function() {
    this.setData({
        numberA: 1,
        numberB: 2,
      })
  },
  observers: {
      'numberA, numberB': function(numberA, numberB) {
       this.setData({
          sum: numberA + numberB
       })
     }
  },
  methods: {
    navtabfn(e){
		let _that = this;
		let { id } = e.target.dataset;
		let { navlistdata } = _that.data;
		_that.setData({
			'navlistdata.navdefault':id,
		})
	}
  }
 
})
