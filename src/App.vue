<template>
  <div id="app">
    <div class="form-page-container">
      <FormPage :form-config="formConfig"></FormPage>
    </div>
  </div>
</template>
<script>
import FormPage from "./components/FormPage";
export default {
  name: 'app',
  components: {
    FormPage
  },
  data () {
    return {
      formConfig: {
        formTitle: '新增表单'
      }
    }
  }
}
</script>
 <style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100%;
  justify-content: center;
  align-content: center;
}
#app .form-page-container {
  border: 1px solid #ccc;
  box-shadow: 3px 4px 10px #ccc;
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
</style>
