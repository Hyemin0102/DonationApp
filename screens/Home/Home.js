import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import globalStyle from '../../assets/styles/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import style from './style';
import Header from '../../components/Header/Header';
import {resetToInitialState} from '../../components/redux/reducers/User';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoriesId} from '../../components/redux/reducers/Categories';

const Home = () => {
  const user = useSelector(state => state.user);
  const donations = useSelector(state => state.donations);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  console.log('donations', donations);

  useEffect(() => {
    console.log('선택 카태고리 변경됨');
  }, []);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello,,,,,</Text>
            <View style={style.headerContainer}>
              <Header title={user.firstName + ' ' + user.lastName + '👋'} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImg}}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.imageContainer}>
          <Image
            style={style.image}
            source={require('../../assets/imagas/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              let newDate = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newDate.length > 0) {
                setCategoryList(prevState => [...prevState, ...newDate]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  // 클릭시 작동하는 옵션이 아니라 프롭의 이름(dispatch함수를 넘겨줌)
                  onPress={value => dispatch(updateSelectedCategoriesId(value))}
                  title={item.name}
                  isInactive={
                    //리덕스의 selectedCategoriesId 와 값이 같으면 active
                    item.categoryId !== categories.selectedCategoriesId
                  }
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
