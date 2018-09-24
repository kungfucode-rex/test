/* @flow
<template>
  <div>
    {{formConfig.formTitle}}
  </div>
</template>
*/
// <script>
export default {
  props: {
    formConfig: {
      type: Object,
      validator (value) {
        return value.formTitle && value.formUrl
      }
    }
  }
}
// </script>

