<template>
  <div class="addressEdit">
    <nav-bar>
      <template v-slot:default>{{ title }}</template>
    </nav-bar>
    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      :show-delete="type == 'edit'"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import NavBar from "@/components/commen/navbar/NavBar.vue";
import { ref, reactive, toRefs, onMounted, computed } from "vue";
import { areaList } from "@vant/area-data";
import { addAddress, getAddressDetail, editAddress, deleteAddress } from "@/network/address";
import { Toast } from "vant";
import { useRouter, useRoute } from "vue-router";
export default {
  components: {
    NavBar,
  },
  setup() {
    const searchResult = ref([]);

    const router = useRouter();
    const route = useRoute();

    const state = reactive({
      addressInfo: {},
      type: "add",
      addressId: "",
    });

    const onChangeDetail = (val) => {
      if (val) {
        searchResult.value = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        searchResult.value = [];
      }
    };

    // 保存地址
    const onSave = (content) => {
      // console.log(content);
      let params = {
        name: content.name,
        address: content.addressDetail,
        phone: content.tel,
        province: content.province,
        city: content.city,
        county: content.county,
        is_default: content.isDefault ? 1 : 0,
      };
      if (state.type == "edit") {
        editAddress(state.addressId, params);
      } else if ((state.type = "add")) {
        addAddress(params);
      }
      Toast.success("保存成功！");
      setTimeout(() => {
        Toast.clear();
        router.go(-1);
      },2000);
    };

    // 删除地址
    const onDelete = () => {
      deleteAddress(state.addressId);
      Toast.success("删除成功！");
      setTimeout(() => {
        Toast.clear();
        router.go(-1);
      },2000);
    };

    // 获取参数
    onMounted(() => {
      const { type, addressId } = route.query;
      state.type = type;
      state.addressId = addressId;

      if (type == "edit") {
        getAddressDetail(addressId).then((res) => {
          console.log(res);
          state.addressInfo = {
            name: res.name,
            tel: res.phone,
            province: res.province,
            city: res.city,
            addressDetail: res.address,
            county: res.county,
            isDefault: res.is_default,
          };
        });
        console.log(areaList);
      }
    });

    // 设置标题
    let title = computed(() => {
      return state.type == "add" ? "新增地址" : "编辑地址";
    });

    return {
      onSave,
      onDelete,
      areaList,
      searchResult,
      onChangeDetail,
      ...toRefs(state),
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
.addressEdit {
  padding: 50px 0;
  width: 100%;
  padding: 50px 0;
  min-height: 100vh;
  background: #fff;
  position: relative;
  z-index: 10;
}
</style>