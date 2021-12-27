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
                        <Input v-model="item.typeModel" :disabled='true'>
                            <!-- <Option v-for="i in typeList" :value="i.value" :key="i.value">{{ i.label }}</Option> -->
                        </Input>
                    </div>
                    <img @click="deleteItem(index)"  src='../../assets/logoImg/delete.png' alt="">
                </div>
                    <div class="firstTitle">
                    <div class="type">{{item.address}}:</div>
                    <div class="typeInput">
                        <Input  v-model="item.addressModel"  @on-focus="showModel">
                         
                            <!-- <Option v-for="i in addressList" :value="i.value" :key="i.value">{{ i.label }}</Option> -->
                        </Input>
                    </div>
                      <van-action-sheet v-model="show" title="地点库位">
                            <div class="ModalContent">
                                 <div class="modalHead">
                                     <input type="text" placeholder="请输入地点名称或编码">
                                 </div>
                                 <div class="modalWare">
                                     <div class="wareTitle">常用仓库</div>
                                     <div class="wareCompany"> 
                                          <div @click="oftenWare(index)" :class="activeClass==index?'activeClass':''" v-for="(item,index) in cityList" :key="index">{{item}}</div>
                                     </div>
                                 </div>
                                  <div class="scroll">
                                        <div class="scrollTitle">选择仓库与库位</div>
                                        <div class="scrollMain">
                                            <div class="scrollLeft">
                                              <div @click="letfScrollClcik(index)" class="leftItem" v-for="(item,index) in LeftList" :key="index">
                                                <span v-if="scrollLeftActive==index" class="scrollActive"></span>
                                                <div style="margin-left:0.3rem">
                                                      <p :class="scrollLeftActive==index?'active':''">{{item.name}}</p>
                                                      <p>{{item.value}}</p>
                                               </div>
                                               </div>
                                            </div>
                                            <div class="scrollRight">
                                              <div class="scrollRightContent">
                                              <div @click="rightScrollClcik(index)" class="rightItem" v-for="(item,index) in rightList" :key="index">
                                                 <div class="itemCon">
                                                    <p>{{item.name}}</p>
                                                    <p>{{item.value}}</p>
                                                 </div>
                                                 <div v-if="scrollRightActive==index" class="itemIcon">
                                                    <Icon type="ios-checkmark" />
                                                 </div>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                     </div>
                                 <div class="wareBot">
                                    <div class="reset">重置</div>
                                    <div @click="sure" class="sure">确定</div>
                                 </div>
                            </div>
                      </van-action-sheet>
                </div>
                    <div class="firstTitle">
                    <div class="type">{{item.location}}:</div>
                    <div class="typeInput">
                        <Input  v-model="item.locationModel" :disabled='true' >
                            <Option v-for="i in locationList" :value="i.value" :key="i.value">{{ i.label }}</Option>
                        </Input>
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
import commonHeader from "@/components/common-header";
export default {
  data() {
    return {
      tittle: "选择仓库",
      rightTitle: "下一步",
      cityList: ["北京分公司", "天津分公司", "河北新公司"],
      activeClass: 0,
      scrollRightActive:0,
      scrollLeftActive:0,
      LeftList: [
        { name: "北京分公司", value: 1000 },
        { name: "天津分公司", value: 2000 },
        { name: "河北分公司", value: 3000 }
      ],

      rightList: [
        { name: "物流商全新良品库", value: 1001 },
        { name: "物流商演示产品库", value: 1002 },
        { name: "科捷北京待修产品库", value: 1003 },
        { name: "科捷北京营业盒损库", value: 1004 },
        { name: "物流商物流盒损库", value: 1005 },
        { name: "物流商售后产品库", value: 1006 },
        { name: "科捷北京客户代办库", value: 1007 },
        { name: "物流商拍卖良品库", value: 1008 },
        { name: "业务周转库（当日清0)", value: 1009 },
        { name: "业务周转库（定期清理)", value: 1010 }
      ],
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
          soldNum: 0
        }
      ],
      show: false
    };
  },
  methods: {
    //删除
    deleteItem(index) {
      this.addArr.splice(index, 1);
      this.refresh()
    },
    // 添加列表
    add() {
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
        soldNum: 0
      });
      this.refresh()
    },
    refresh(){
      for(let i in this.addArr){
        this.addArr[i].typeModel='经销采购订单'
        this.addArr[i].addressModel='北京分公司(1000)'
        this.addArr[i].locationModel='物流商全新良品库（1001）'
      }
    },
    oftenWare(index){
      this.activeClass=index
    },
    letfScrollClcik(index){
      this.scrollLeftActive=index
    },
     rightScrollClcik(index){
      this.scrollRightActive=index
    },
    sure(){
      this.show=false
      this.refresh()
    },
    //点击确定的时候,
    showModel() {
        this.show = true;
    },
    nextClick() {
      this.$router.push({
        path: "/selection/selectConfirm"
      });
    }
  },
  components: {
    commonHeader
  },
  mounted() {}
};
</script>

<style scoped>
.ModalContent {
  padding: 0 0.15rem;
  background: white;
  overflow: hidden;
}
.scrollRightContent{
  height: 65%;
  overflow: auto;

}
.modalHead {
  height: 1rem;
  width: 100%;
}
.modalHead input {
  background: #ccc;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  height: 0.6rem;
  width: 100%;
  text-indent: 0.15rem;
  margin-top: 0.2rem;
}
.modalHead input::placeholder {
  text-indent: 0.15rem;
}
.modalWare {
  display: flex;
  flex-direction: column;
}
.wareCompany {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.scrollRight {
  height: 100%;
  width: 70%;
}
.rightItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.itemCon {
  height: 1rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  margin-left: 0.15rem;
}
.itemCon p:nth-child(1) {
  font-size: 0.16rem;
}
.itemCon p:nth-child(2) {
  font-size: 0.14rem;
  color: #999999;
}
.itemIcon {
  height: 1rem;
  width: 0.5rem;
}
.itemIcon i {
  font-size: 0.5rem;
  color: red;
}
.wareCompany div {
  height: 0.6rem;
  width: 30%;
  border: 0.01rem solid #ccc;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.18rem;
  margin-top: 0.1rem;
  border-radius: 0.3rem;
}
.wareTitle {
  font-size: 0.22rem;
  font-weight: 600;
}
.scrollActive {
  height: 0.6rem;
  width: 0.04rem;
  background: red;
}
.scroll {
  margin-bottom: 1rem;
  height: 6.6rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: 0.1rem;
}
.scrollTitle {
  font-size: 0.22rem;
  font-weight: 600;
}
.scrollMain {
  display: flex;
}
.scrollLeft {
  width: 30%;
  height: 100%;
}
.leftItem {
  height: 1rem;
  display: flex;
  align-items: center;
}
.leftItem p:nth-child(1) {
  font-size: 0.16rem;
}
.leftItem p:nth-child(2) {
  font-size: 0.14rem;
  color: #999999;
}
.leftScroll {
  height: 100%;
}

.wareBot {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1rem;
  display: flex;
}
.reset {
  height: 0.6rem;
  width: 26%;
  text-align: center;
  line-height: 0.6rem;
  color: red;
  border: 0.01rem solid red;
  border-radius: 0.3rem;
  font-size: 0.18rem;
  margin-top: 0.2rem;
  margin-left: 2%;
}
.sure {
  height: 0.6rem;
  width: 68%;
  background: red;
  color: white;
  border-radius: 0.3rem;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.18rem;
  margin-left: 3%;
  margin-top: 0.2rem;
}

/* /deep/ .ivu-select .ivu-select-dropdown{
  display: none;
} */
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
  z-index: 2;
  background: white;
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
.activeClass {
  border: 0.01rem solid red;
  color: red;
}
.active{
  color: red;
}
</style>
