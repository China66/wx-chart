import config from '../../../config';    
const app = getApp();
Component({
  properties: {
    navlistdata:{
      type: Object,
      value: {
		  navArr:'',
		  navdefault:''
	  }
    }
  },
  data: {
	 contentdata:{
		 navdefault:'1'
	 }
  }, 
  lifetimes: {
    attached: function() { },
    moved: function() {},
    detached: function() {},
  },
  attached: function() {},
  ready: function() {
    let _that = this;
	let {contentdata,navlistdata} = _that.data;
		contentdata.navdefault = navlistdata['navdefault']
	_that.setData({
		contentdata:contentdata
	})
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function() {},
    onLoad:function(){}
  },
  methods: {
    navtabfn(e){
		let _that = this;
		let { id } = e.target.dataset;
		let { navlistdata,contentdata } = _that.data;
		contentdata.navdefault = id;
		_that.setData({
			'navlistdata.navdefault':id,
			contentdata:contentdata
		})
	}
  }
 
})
