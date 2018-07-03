/**
 * 新房楼盘模块
 * @version 1.0
 * 编码规范：
 *        样式变量命名使用驼峰命名法:newNews
 *        组件变量命名使用react-native要求的(首字母大写）:NewNews
 */
import React, { Component } from 'react';

import {
  AppRegistry,
  //类似HTML中的DIV
  View,
  //与HTML不同的是：
  //1.”src“改成了“source”
  //2.引用本地图片时 需使用require
  //比如：
  //    <Image source={require('./src/images/index/logo.png')} />
  Image,
  //放本文的
  Text,
  //HTML中的Input的text类型
  TextInput,
  Dimensions,
  //提供放置样式的
  //使用它的好处：https://reactnative.cn/docs/0.36/stylesheet.html
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  //HTML的Button标签
  Button,
 } from 'react-native';
//轮播图依赖模块
import Swiper from 'react-native-swiper';

//定义样式
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f5f5f5'
  },
  // 头部模块
  logo: {
    resizeMode: 'stretch',
    height: 28,
  },
  headerRight: {
    resizeMode: 'stretch',
    height: 28,
    width: 28,
    marginRight: 20
  },
  headerRightSidebar: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0 , 0 , 0 , 0.25)',
    zIndex: 10
  },
  headerRightSidebarHide: {
    display: 'none',
  },
  headerRightSidebarView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    height: 101,
    alignContent: 'stretch'
    },
  //感觉命名会越来越长
  headerRightSidebarViewOption: {
    flex: 1,
    alignContent: 'stretch',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    paddingBottom: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    height: 101,
    backgroundColor: '#fff',
    minWidth: Dimensions.get('window').width / 3,
    maxWidth: Dimensions.get('window').width / 3
  },
  headerRightSidebarImage: {
    resizeMode: 'stretch',
    width: 25,
    height: 25,
    marginBottom: 10,
    paddingTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  headerRightSidebarText: {
    fontSize: 16,
    height: 16,
    paddingTop: 0,
    textAlign: 'center'
  },
  headerLeft: {
    flexDirection: 'row',
    marginLeft: 15
  },
  headerLeftText: {
    flex: 1
  },
  headerLeftImage: {
    flex: 1,
    resizeMode: 'stretch',
    height: 10,
    width: 10,
    marginTop: 2,
    marginLeft: 3
  },
  bannerImage: {
    resizeMode: 'stretch',
    height: 250,
    flex: 1
  },
  swiper: {
    position: 'relative',
    height: 250,
    flexDirection: 'row',

  },
  searchView: {
    position: 'absolute',
    justifyContent:'center',
    alignItems:'center',
    width: Dimensions.get('window').width,
  },
  searchInput: {
    width: 300,
    top: 180,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 3,
    paddingRight: 10,
    paddingLeft: 35,
  },
  searchInputButton: {
    position: 'absolute',
    top: 180,
    left: 5,
    resizeMode: 'stretch',
    width: 25,
    height: 25,
    marginTop: 8,
    marginRight: 5
  },

  menuView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15
  },
  menuFindView: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: 10
  },
  menuFindViewImage: {
    resizeMode: 'stretch',
    width: 55,
    height: 55,
    marginBottom: 10
  },
  menuFindViewText: {
    textAlign: 'center',
    color: '#333'
  },

  //最新资讯
  newNewsView: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  newNewsViewLeft: {
    marginTop: 15,
    flex: 1,
    height: 20,
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  newNewsViewRight: {
    marginLeft: 15,
    marginTop: 15,
    height: 20,
    flex: 3,
  },
  newNewsViewLeftImage: {
    paddingTop: 0,
    resizeMode: 'stretch',
    width: 80,
    height: 20
  },
  newNewsList: {
    flexDirection: 'row',
  },
  newNewsListType: {
    flex: 1,
    height: 18,
    lineHeight: 16,
    borderColor: '#ef4f4c',
    color: '#ef4f4c',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 3,
    textAlign: 'center',

  },
  newNewsListTitle: {
    flex: 3,
    marginLeft: 10,
    lineHeight: 20,
  },
  //新房筛选模块
  newHouseScreenMenu: {
    height: 160,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff'
  },
  newHouseScreenMenuList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  newHouseScreenMenuText: {
    flex: 1,
    maxWidth: Dimensions.get('window').width / 3,
    minWidth: Dimensions.get('window').width / 3,
    textAlign: 'center',
    marginTop: 5,

  }
});
//生命全局变量
let that;

//架构模块
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerRightSidebar: true,
      images: [
        {
          url:require('./src/images/index/banner01.jpg'),
        },
        {
          url:require('./src/images/index/banner02.jpg'),
        }
      ],
    };
    that = this;
  }
  clickHeaderRightSidebar() {
    this.setState({
      headerRightSidebar: !this.state.headerRightSidebar
    });
  }
  //设置header模块
  static navigationOptions = {
    //设置header的标题或者模块
    headerTitle: (
      <View>
        <Image
          style={styles.logo}
          source={require('./src/images/index/logo.png')} />
      </View>
    ),
    //右边
    headerRight: (
          <View style={styles.headerRight}>
            //TouchableOpacity标签提供了点击效果 只是点击时 当前模块透明度发生改变的动画效果
            //具体业务逻辑需使用“onPress”属性进行绑定自定义回调函数进行编写业务逻辑(需要实现的效果)
            <TouchableOpacity
              onPress={() => that.clickHeaderRightSidebar()}>
              <Image
                style={styles.headerRight}
                source={require('./src/images/index/naviright.png')} />
            </TouchableOpacity>
         	</View>
    ),
    //左边
    headerLeft:(
      <View style={styles.headerLeft}>
        <TouchableOpacity
        style={styles.headerLeft}
        onPress={() => that.props.navigation.navigate('CityMenu')} >
          <Text style={styles.headerLeftText}>深圳</Text>
          <Image
            style={styles.headerLeftImage}
            source={require('./src/images/index/jiantou_xpz.png')}/>
        </TouchableOpacity>
      </View>
    )
  }

  // this.props.navigation.navigate('Signup');
  render() {
    return (
      <View style={styles.body}>
        <Sidebar />
        <Banner />
        <Menu />
        <NewNews />
        <NewHouseScreenMenu />
      </View>
    );
  }
};

//侧边栏模块
class Sidebar extends Component {
  clickHeaderRightSidebar() {
    alert('JJJ');
  }
  render() {
    return (
      //第一层设置背景层
      <View
        style={[styles.headerRightSidebar , that.state.headerRightSidebar && styles.headerRightSidebarHide]}>
        <TouchableOpacity
          style={styles.headerRightSidebar}
          onPress={() => that.clickHeaderRightSidebar()}>
          //模块底层
          <View style={styles.headerRightSidebarView}>
            //选项
            <View style={styles.headerRightSidebarViewOption}>
              <Image
                source={require('./src/images/index/shouye01.png')}
                style={styles.headerRightSidebarImage}
              />
              <Text style={styles.headerRightSidebarText}>首页</Text>
            </View>
            <View style={styles.headerRightSidebarViewOption}>
              <Image
                source={require('./src/images/index/xinfang02.png')}
                style={styles.headerRightSidebarImage}
              />
              <Text style={styles.headerRightSidebarText}>新房楼盘</Text>
            </View>
            <View style={styles.headerRightSidebarViewOption}>
              <Image
                source={require('./src/images/index/youhuituangou07.png')}
                style={styles.headerRightSidebarImage}
              />
              <Text style={styles.headerRightSidebarText}>优惠团购</Text>
            </View>
            <View style={styles.headerRightSidebarViewOption}>
              <Image
                source={require('./src/images/index/shouye01.png')}
                style={styles.headerRightSidebarImage}
              />
              <Text style={styles.headerRightSidebarText}>首页</Text>
            </View>
            <View style={styles.headerRightSidebarViewOption}>
              <Image
                source={require('./src/images/index/shouye01.png')}
                style={styles.headerRightSidebarImage}
              />
              <Text style={styles.headerRightSidebarText}>首页</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

//轮播图和搜索框模块
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[
        {
          url:require('./src/images/index/banner01.jpg'),
        },
        {
          url:require('./src/images/index/banner02.jpg'),
        }
      ],
    };
  }
  render() {
    window.banner = this;
    return (
      <View style={{height:250}}>
        //这是使用”Swiper“组件实现的轮播图代码
        //具体参数详情 https://js.coach/react-native-swiper?search=react-native-swiper
        <Swiper
            style={styles.swiper}
            height={250}
            horizontal={true}
            paginationStyle={{bottom: 10}}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={3}>
        {
          this.state.images.map(function(obj, key){
            return(
              <View style={styles.swiper} key={key}>
                <Image source={obj.url} style={styles.bannerImage}/>
              </View>
            );
          })
        }
        </Swiper>
        // 搜索框
        <View style={styles.searchView}>
          <View style={{position: 'relative'}}>
            // 这是文本框的组件
            // 详情查看  https://reactnative.cn/docs/0.28/textinput.html#content
            <TextInput
              style={styles.searchInput}
              keyboardType={'default'}
              clearButtonMode={'while-editing'}
              returnKeyType={'search'}
              placeholder={'输入楼盘或区域开始找房咯~'}>
            </TextInput>
            <Image style={styles.searchInputButton} source={require('./src/images/index/big.png')} />
          </View>
        </View>
      </View>
    );
  }
}

//菜单模块
class Menu extends Component {
  render() {
    return (
      <View style={styles.menuView}>
        <View style={styles.menuFindView}>
          //‘source’是放image的URL的 使用的时候 需要‘require’配合使用
          <Image style={styles.menuFindViewImage} source={require('./src/images/index/nav_loupan.png')} />
          <Text style={styles.menuFindViewText}>新房楼盘</Text>
        </View>
        <View style={styles.menuFindView}>
          <Image style={styles.menuFindViewImage} source={require('./src/images/index/nav_zixun.png')} />
          <Text style={styles.menuFindViewText}>房产资讯</Text>
        </View>
        <View style={styles.menuFindView}>
          <Image style={styles.menuFindViewImage} source={require('./src/images/index/nav_loupan.png')} />
          <Text style={styles.menuFindViewText}>新房楼盘</Text>
        </View>
        <View style={styles.menuFindView}>
          <Image style={styles.menuFindViewImage} source={require('./src/images/index/nav_loupan.png')} />
          <Text style={styles.menuFindViewText}>新房楼盘</Text>
        </View>
      </View>
    );
  }
}

//最新资讯模块
class NewNews extends Component {
  //类似React的组件中的初始化回调函数“getInitialState”
  constructor(props) {
    super(props);
    //设置state变量
    this.state = {
      data:[
        {
          id: 1,
          title: '快讯快讯快讯快讯快讯快讯1',
          type : '新房快讯'
        },
        {
          id: 2,
          title: '快讯快讯快讯快讯快讯快讯2',
          type : '新房快讯'
        },
        {
          id: 3,
          title: '快讯快讯快讯快讯快讯快讯3',
          type : '新房快讯'
        }
      ]
    };

  }
  render() {
    return (
      <View style={styles.newNewsView}>
        <View style={styles.newNewsViewLeft}>
          <Image style={styles.newNewsViewLeftImage} source={require('./src/images/index/zuixinzixun.png')} />
        </View>
        <View style={styles.newNewsViewRight}>
        // 采用"Swiper"实现轮播效果
        // 具体参数详情 https://js.coach/react-native-swiper?search=react-native-swiper
        <Swiper
            style={styles.swiper}
            height={250}
            horizontal={true}
            paginationStyle={{bottom: 10}}
            showsButtons={false}
            showsPagination={false}
            autoplay={true}
            scrollEnabled={false}
            autoplayTimeout={3}>
            {
              //一般遍历可以按照这样 使用map遍历
              //类似于JQuery中的$.each(Object , function[key , object])
              //不同的是：map的第二个参数“function[key , object]”的参数与JQuery的$.each()的第二个参数的参数“function[key , object]”是位置相反的
              //当然如果第二个参数都只设置了一个参数时，那么它们是相同的 都是Object
              this.state.data.map(function(obj, key){
                return (
                  //key={key}这个在遍历的时候 如果不写会出现一个警告
                  <View style={styles.newNewsList} key={key}>
                    <Text style={styles.newNewsListType}>{obj.type}</Text>
                    <Text style={styles.newNewsListTitle}>{obj.title}</Text>
                  </View>
                );
              })
            }
          </Swiper>
        </View>
      </View>
    );
  }
}

//新房筛选菜单模块
class NewHouseScreenMenu extends Component {
  render() {
    return (
      <View style={styles.newHouseScreenMenu}>
        <View style={styles.newHouseScreenMenuList}>
          <Text style={styles.newHouseScreenMenuText}>一室</Text>
          <Text style={styles.newHouseScreenMenuText}>二室</Text>
          <Text style={styles.newHouseScreenMenuText}>三室</Text>
          <Text style={styles.newHouseScreenMenuText}>售罄</Text>
          <Text style={styles.newHouseScreenMenuText}>在售</Text>
          <Text style={styles.newHouseScreenMenuText}>待售</Text>
          <Text style={styles.newHouseScreenMenuText}>5千以下</Text>
          <Text style={styles.newHouseScreenMenuText}>5千-1万</Text>
          <Text style={styles.newHouseScreenMenuText}>1-2万</Text>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>
    );
  }
}


//城市菜单
class CityMenu extends Component {
  render() {
    return (
      <Text>test</Text>
    );
  }
}








//允许外部文件调用的模块
export {Home, Sidebar, CityMenu, Banner, Menu, NewNews};
