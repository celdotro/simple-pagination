# Vue Info Box

> A simple component for vuejs 2 to display different types of info boxes

# Requirements

> VueJS 2.x.x

```bash
npm install vue
```

> Font Awesome 4.x.x

```bash
npm install font-awesome
```

# Instalation
```bash
npm install vue-info-box --save-dev
```

# Usage
```Vue
<template>
    <div>
      <box :active="true" :type="'info|warning|error|confirm'">
  	<div slot="box-body">
  	</div>
      </box>
    </div>
</template>

<script>

import Box from 'vue-info-box'
export default {
    name: "YourComponent",
    components: {
        Box
    }
}
</script>
```
