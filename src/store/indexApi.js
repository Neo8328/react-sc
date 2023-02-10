import  { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const MenuPostData = new FormData();
MenuPostData.append('menu_id', 381);



const indexApi = createApi({
  reducerPath: 'indexApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints(build){


    

    const authorization = 'Bearer ZnNam4OTQ!1NjEy#b25mOTQ1eWp3ZTg0NQ';

    // const baseUrl = 'https://api-public-dushibuy.singtao.ca:8443/v1/';
     const baseUrl = 'https://api-public-dushibuy.singtao.ca/v1/';

    return {
      getMenu: build.query({
        query(){
          return {
            url: baseUrl + 'menu/items',
            method: 'post',
            headers: {
              'authorization': authorization,
            },
            body: MenuPostData
          }
        },
        transformResponse(baseQueryReturnValue){
          return baseQueryReturnValue.list
        }
      }),
      getProductTypeList: build.query({
        query(type){
          // console.log(type.type)
          const PostData = new FormData();
          PostData.append("paged", 1);
          PostData.append("num_per_page", 8);
          PostData.append("slug", type.type);
          return {
            url: baseUrl + 'product/' + type.url,
            method: 'post',
            headers: {
              'authorization': authorization,
            },
            body: PostData
          }
        },
        transformResponse(baseQueryReturnValue){
          return baseQueryReturnValue.list
        }
      }),
      getProductHot: build.query({
        query(){
          return {
            url: baseUrl + 'product/hot',
            method: 'post',
            headers: {
              'authorization': authorization,
            },
            
          }
        },
        transformResponse(baseQueryReturnValue){
          return baseQueryReturnValue.data
        }
      }),
      // getRecommend: build.query({
      //   query(type){
      //     console.log(type)
      //     const RecommendPostData = new FormData();
      //     RecommendPostData.append("paged", 1);
      //     RecommendPostData.append("num_per_page", 8);
      //     RecommendPostData.append('slug','featured');  
      //     // console.log(RecommendPostData)
      //     // console.log(PostData.has('slug'))
      //     // console.log(PostData.getAll('slug'))
      //     // PostData.set('slug', 'featured')
      //     // console.log(PostData.has('slug'))
      //     // console.log(PostData.getAll('slug'))
      //     // for (const value of PostData.values()) {
      //     //   console.log(value);
      //     // }
      //     return {
      //       url: baseUrl + 'product/recommend',
      //       method: 'post',
      //       headers: {
      //         'authorization': authorization,
      //       },
      //       body: RecommendPostData
      //     }
      //   },
      //   transformResponse(baseQueryReturnValue){
      //     return baseQueryReturnValue.list
      //   }
      // }),
      // getWeekly: build.query({
      //   query(type){
      //     const WeeklyPostData = new FormData();
      //     WeeklyPostData.append("paged", 1)
      //     WeeklyPostData.append("num_per_page", 8);
      //     WeeklyPostData.append("slug", 'weektopsell');
      //     // PostData.set("slug", type);
      //     // for (const value of PostData.values()) {
      //     //   console.log(value);
      //     // }
          
      //     return {
      //       url: baseUrl + 'product/week/topsell',
      //       method: 'post',
      //       headers: {
      //         'authorization': authorization,
      //       },
      //       body: WeeklyPostData,
      //     }
      //   },
      //   transformResponse(baseQueryReturnValue){
      //     return baseQueryReturnValue.list
      //   }
      // }),
      getNew: build.query({
        query(){
          const NewPostData = new FormData();
          NewPostData.append("paged", 1)
          NewPostData.append("num_per_page", 36);
          NewPostData.append("skip_products", '');
          return {
            url: baseUrl + 'product/list',
            method: 'post',
            headers: {
              'authorization': authorization,
            },
            body: NewPostData,
          }
        },
        transformResponse(baseQueryReturnValue){
          return baseQueryReturnValue.list
        }
      }),
      // getSlider: build.query({
      //   query(){
      //     const SliderData = new FormData();
      //     SliderData.append("paged", 1)
      //     SliderData.append("num_per_page", 8);
      //     SliderData.append("slug", 'home-slider');
      //     // PostData.set("slug", 'home-slider')
      //     return {
      //       url: baseUrl + 'product/main/slider',
      //       method: 'post',
      //       headers: {
      //         'authorization': authorization,
      //       },
      //       body: SliderData
      //     }
      //   },
      //   transformResponse(baseQueryReturnValue){
      //     return baseQueryReturnValue.list
      //   }
      // }),
      // getRightSide: build.query({
      //   query(){
      //     const RightSideData = new FormData();
      //     RightSideData.append("paged", 1)
      //     RightSideData.append("num_per_page", 8);
      //     RightSideData.append("slug", 'right-side');
      //     // PostData.set("slug", 'right-side')
      //     return {
      //       url: baseUrl + 'product/main/slider',
      //       method: 'post',
      //       headers: {
      //         'authorization': authorization,
      //       },
      //       body: RightSideData
      //     }
      //   },
      //   transformResponse(baseQueryReturnValue){
      //     return baseQueryReturnValue.list
      //   }
      // }),
      getStaticPage: build.query({
        query(type){
          // console.log(type)
          const StaticPage = new FormData();
          StaticPage.append("page_path", type)
          return{
            url: baseUrl + 'page/static/',
            method: 'post',
            headers: {
              'authorization': authorization,
            },
            body: StaticPage,
            keepUnusedDataFor:86400
          }
        },
        transformResponse(baseQueryReturnValue){
          return baseQueryReturnValue.data
        }

      }),
      getProductList: build.query({
        query({categories, page}){
          const ProductList = new FormData();
          ProductList.append("paged", page);
          ProductList.append("num_per_page", 24);
          ProductList.append("categories", categories);
          ProductList.append("order_by", 'date');
          ProductList.append("order", 'desc');

          return {
            url: baseUrl + 'product/list',
            method: 'post',
            headers: {
              'authorization': authorization,
            },
            body: ProductList,
            

          }
        }
      }),
      getProductDetail: build.query({
        query(id){
          const ProductDetail = new FormData();
          return {
            url: baseUrl + 'product/single/' + id,
            method: 'post',
            headers: {
              'authorization': authorization,
            },
            body: ProductDetail,
          }
          
        },
        transformResponse(baseQueryReturnValue){
          return baseQueryReturnValue.product
        }
      }),
      getFeatured: build.query({
        query(){
          return {
            url: 'https://api2.singtao.ca/counter/api/elastic/articles.php?action=popular&range=168h&group=singclub_ca&size=15',
            method: 'get',
            headers: {
              'key': '9713f4xy\r\n',
              'secret': 'f28c4f138957f0c104b55f50\r\n'
            },
            mode: "cors",
            crossDomain: true
          }
        }
      })
    }
    

    
  }
});



export const {
  useGetMenuQuery,
  // useGetRecommendQuery,
  // useGetWeeklyQuery,
  useGetNewQuery,
  useGetFeaturedQuery,
  // useGetSliderQuery,
  // useGetRightSideQuery,
  useGetStaticPageQuery,
  useGetProductListQuery,
  useGetProductDetailQuery,
  useGetProductTypeListQuery,
  useGetProductHotQuery
} = indexApi



export default indexApi