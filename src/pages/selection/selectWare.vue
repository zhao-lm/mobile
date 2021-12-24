<template>
   <div class="box">
      <common-header @sureClick='nextClick' :showRightTitle="true" :rightTitle='rightTitle' :tittle="tittle" :showback="true" :showright='true'></common-header>
      <div class="head">
            <div class="rightContent">
                <div class="phoneItem">
                    <div class="itemLeft">
                        <img src="../../assets/logoImg/360.png" alt="">
                        
                    </div>
                    <div class="itemRight">
                        <div class="itemTitle">我是一颗小小的石头深深的埋在一处食我千年以后偶偶偶
                            是一颗小小的石头深深的埋在一处食我千年以后偶偶偶是一颗小小的石头深深的埋在一处食我千年以后偶偶偶
                        </div>
                        <div class="itemBot">
                            <div class="itemNum">5437268</div>
                            <div class="itemPrice">3000￥</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rightContent">
                <div class="phoneItem">
                    <div class="itemLeft">
                        <img src="../../assets/logoImg/360.png" alt="">
                        
                    </div>
                    <div class="itemRight">
                        <div class="itemTitle">我是一颗小小的石头深深的埋在一处食我千年以后偶偶偶
                            是一颗小小的石头深深的埋在一处食我千年以后偶偶偶是一颗小小的石头深深的埋在一处食我千年以后偶偶偶
                        </div>
                        <div class="itemBot">
                            <div class="itemNum">5437268</div>
                            <div class="itemPrice">3000￥</div>
                        </div>
                    </div>
                </div>
            </div>
             <div class="title">
                 <div>供应商名称</div>
                 <div>宁夏理工大学</div>
             </div>
              <div class="title">
                 <div>供应商名称</div>
                 <div>宁夏理工大学</div>
             </div>
              <div class="title">
                 <div>供应商名称</div>
                 <div>宁夏理工大学</div>
             </div>
              <div class="title">
                 <div>供应商名称</div>
                 <div>宁夏理工大学</div>
             </div>
      </div>
      <div class="content">
           <div class="contentHead">
               <img src="../../assets/logoImg/ware.png" alt="">
               <div>仓库信息</div>
           </div>
           <div class="contentMain" v-for="(item,index) in addArr" :key="index">
                <div class="firstTitle">
                    <div class="type">{{item.type}}:</div>
                    <div class="typeInput">
                        <Select v-model="item.typeModel" >
                            <Option v-for="i in typeList" :value="i.value" :key="i.value">{{ i.label }}</Option>
                        </Select>
                    </div>
                    <img @click="deleteItem(index)"  src='../../assets/logoImg/delete.png' alt="">
                </div>
                    <div class="firstTitle">
                    <div class="type">{{item.address}}:</div>
                    <div class="typeInput">
                        <Select v-model="item.addressModel" >
                            <Option v-for="i in addressList" :value="i.value" :key="i.value">{{ i.label }}</Option>
                        </Select>
                    </div>
                
                </div>
                    <div class="firstTitle">
                    <div class="type">{{item.location}}:</div>
                    <div class="typeInput">
                        <Select v-model="item.locationModel" >
                            <Option v-for="i in locationList" :value="i.value" :key="i.value">{{ i.label }}</Option>
                        </Select>
                    </div>
                    
                </div>
                    <div class="secondTitle">
                    <div class="num">{{item.numCount}}:</div>
                    <div class="calculation">
                        <span>-</span>
                        <input type="text" v-model="item.num">
                        <span>+</span>
                    </div>
                    <div class="sold">{{item.soldNum}}件</div>
                </div>
           </div>
           <div class="add">
               <img src="../../assets/logoImg/add.png" alt="">
               <div @click="add" class="addTitle">继续添加</div>
           </div>
      </div>
   
    </div>
</template>

<script>
import '@/utils/rem';
import commonHeader from "@/components/common-header";
export default {
  data() {
    return {
      tittle: "选择仓库",
      rightTitle: "下一步",
      addArr: [
        {
          address: "仓库地点",
          type: "采购类型",
          location: "仓库库位",
          numCount: "采购数量",
          addressList: [],
          locationList: [],
          typeList: [],
          addressModel: "",
          locationModel: "",
          typeModel: "",
          num: 0,
         
          soldNum:0
        }
      ],
    };
  },
  methods: {
      //删除
      deleteItem(index){
         this.addArr.splice(index,1)
      },
    // 添加列表
     add(){
       this.addArr.push({
          address: "仓库地点",
          type: "采购类型",
          location: "仓库库位",
          hasImage: true,
          numCount: "采购数量",
          addressList: [],
          locationList: [],
          typeList: [],
          addressModel: "",
          locationModel: "",
          typeModel: "",
          num: 0,
          soldNum:0
       })
     },
    //点击确定的时候
    nextClick() {
      console.log("我是点击下一步的时间");
    }
  },
  components: {
    commonHeader
  },
  mounted() {}
};
</script>

<style scoped>
.head {
  margin-top: 0.15rem;
  width: 100%;
  background: white;
}

.rightContent {
  width: 100%;
}
.phoneItem {
  height: 1.7rem;
  width: 98%;
  /* margin: 0 1%; */
  display: flex;
  align-items: center;
}
.itemLeft {
  height: 1rem;
  width: 1rem;
  margin-top: 0.15rem;
}
.itemLeft img {
  margin-left: 0.15rem;
  height: 1rem;
  width: 1rem;
  display: inline-block;
}
.itemRight {
  height: 1rem;
  margin-left: 0.15rem;
}
.itemTitle {
  min-height: 0.65rem;
  width: 100%;
  font-size: 0.2rem;
  font-weight: 600;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.itemBot {
  height: 0.35rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.itemNum {
  font-size: 0.14rem;
  color: #ccc;
}
.itemPrice {
  font-size: 0.16rem;
  color: red;
}
.title {
    height: 0.6rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title div:nth-child(1) {
  font-size: 0.11rem;
  color: #999999;
  height: 0.4rem;
  margin-left: 4%;
  line-height: 0.4rem;
}
.title div:nth-child(2) {
  font-size: 0.11rem;
  color: #999999;
  height: 0.4rem;
  margin-right: 4%;
  line-height: 0.4rem;
}
.content {
  width: 100%;
  background: white;
  margin-top: 0.2rem;
}
.contentHead {
  height: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
}
.contentHead img {
  height: 0.35rem;
  width: 0.35rem;
  margin-left: 4%;
}
.contentHead div {
  font-size: 0.12rem;
  font-weight: 600;
  margin-left: 0.15rem;
}
.firstTitle {
  height: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
}
.type {
  font-size: 0.12rem;
  font-weight: 600;
  margin-left: 4%;
}
.typeInput {
  width: 43%;
  height: 0.5rem;
  margin-left: 10%;
}
.firstTitle img {
  height: 0.35rem;
  width: 0.35rem;
  margin-left: 1rem;
  margin-bottom: 0.1rem;
}
.secondTitle {
  height: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
}
.num {
  font-size: 0.12rem;
  font-weight: 600;
  margin-left: 4%;
}
.calculation {
  display: flex;
  margin-left: 10%;
}
.calculation input {
  border-left: none;
  border-right: none;
  height: 0.5rem;
  width: 2rem;
  border-top: 0.01rem solid #f3e7e7;
  border-bottom: 0.01rem solid #f3e7e7;
  text-align: center;
  font-weight: 600;
}
.calculation span:nth-child(1) {
  border-radius: 0.04rem 0rem 0rem 0.04rem;
  border: 0.01rem solid #f3e7e7;
  width: 0.5rem;
  height: 0.5rem;
  font-size: 0.16rem;
  line-height: 0.5rem;
  text-align: center;
}
.calculation span:nth-child(3) {
  border-radius: 0.04rem 0rem 0rem 0.04rem;
  border: 0.01rem solid #f3e7e7;
  width: 0.5rem;
  height: 0.5rem;
  font-size: 0.16rem;
  line-height: 0.5rem;
  text-align: center;
}
.sold {
  margin-left: 1rem;
  color: #d82138;
}
.add {
  height: 0.8rem;
  width: 50%;
  margin: 0 auto;
  background: white;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add img {
  width: 0.3rem;
  height: 0.3rem;
  display: inline-block;
}
.addTitle {
  font-size: 0.22rem;
  margin-left: 0.15rem;
  color: #d82138;
  height: 0.8rem;
  line-height: 0.8rem;
  font-weight: 600;
}
</style>
