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
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
  Button,
  Alert
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
    marginTop: 20,
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
  }
});

//架构模块
export default class Home extends Component {
  _onPressButton() {
    Alert.alert('---');
  }
  static navigationOptions = {
    title: '首页',
    headerTitle: (
      <View>
        <Image
          style={styles.logo}
          source={require('./src/images/index/logo.png')} />
      </View>
    ),
    headerRight:(
     	<View>
        <TouchableOpacity
          onPress={this._onPressButton}>
          <Image
            style={styles.headerRight}
            source={require('./src/images/index/naviright.png')}
          />
        </TouchableOpacity>
     	</View>
    ),
    headerLeft:(
      <View style={styles.headerLeft}>
        <TouchableOpacity
          onPress={this.props.navigation.navigate('cityMenu')}
        >
        <Text style={styles.headerLeftText}>深圳</Text>
        <Image
          style={styles.headerLeftImage}
          source={require('./src/images/index/jiantou_xpz.png')}
        />
        </TouchableOpacity>
      </View>
    )
  }

  // this.props.navigation.navigate('Signup');
  render() {
    return (
      <View style={styles.body}>
        <Banner />
        <Menu />
        <NewNews />
      </View>
    );
  }
};

//头部模块
class Header extends Component {
  render() {
    return (
      <View style={{height:50,flexDirection:'row'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 3, backgroundColor: 'skyblue', flexDirection: 'row', height: 50}} >
          <View style={{flex: 1, backgroundColor: 'steelblue'}}></View>
          <View style={{flex: 1, backgroundColor: 'powderblue'}}></View>
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}} />
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
  constructor(props) {
    super(props);
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
              //一边遍历可以按照这样 使用map遍历
              this.state.data.map(function(obj, key){
                return (
                  <View style={styles.newNewsList} key={key}>
                    <Text style={styles.newNewsListType}>{obj.type}</Text>
                    <Text style={styles.newNewsListTitle}>{obj.title}</Text>
                  </View>
                );
              })
            }
          </Swiper>
          // 显示最新资讯的专题、标题，还有添加跳转url
        </View>
      </View>
    );
  }
}

//









//允许外部文件调用的模块
export {Home, Header, Banner, Menu, NewNews};
