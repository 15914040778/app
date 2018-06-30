render() {
  window.banner = this;
  var img = {
    height: 200,
    flex: 2,
    resizeMode: 'stretch'
  },
  swiper = {
    height: 200,
    flexDirection: 'row'
  };
  return (
    <View style={swiper}>
      <Swiper
          style={swiper}
          height={200}
          horizontal={true}
          paginationStyle={{bottom: 10}}
          showsButtons={false}>
      {
        this.state.images.map(function(obj, key){
          return <Image key={key} source={obj.url} style={img}/>;
        })
      }
      </Swiper>
    </View>
  );
}
