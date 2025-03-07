<!-- Created by 337547038 on 2018/8/31 0031. -->
<script>
export default {
  data () {
    return {
      data: [
        {
          name: '广东',
          children: [
            {
              name: '广州市',
              children: [
                {name: '天河区'},
                {name: '越秀区'},
                {name: '白云区'},
                {name: '海珠区'}
              ]
            },
            {name: '深圳市'},
            {name: '东莞市'},
            {name: '湛江市'},
            {name: '阳江市'},
            {name: '清远市'}
          ]
        },
        {name: '北京'},
        {name: '上海'},
        {
          name: '广西',
          children: [
            {name: '桂林市'},
            {name: '南宁市'}
          ]
        }
      ],
      data2: [
        {
          name: '广东',
          show: true,
          children: [
            {name: '广州市'},
            {name: '深圳市'}
          ]
        },
        {name: '北京', children: []},
        {name: '广西'},
        {name: '福建'},
        {name: '湖南'}
      ],
      data3: [
        {name: '广东', value: 1},
        {name: '北京', value: 2}
      ],
      data4: [
        {name: '广东', children: []},
        {name: '北京', children: []},
        {name: '广西', children: []}
      ]
    }
  },
  methods: {
    _click (item) {
      console.log(item)
    },
    _toggle (item, type) {
      // 这里可根据需求限制每次点击都请求加载数据
      // type=true为展开,false收起
      if (!type || item.children.length > 0) {
        return
      }
      let data = []
      if (item.name === '广东') {
        data = [
          {name: '深圳市'},
          {name: '东莞市'},
          {name: '湛江市'},
          {name: '阳江市'},
          {name: '清远市'}
        ]
      }
      if (item.name === '北京') {
        data = [
          {name: '海淀区'}
        ]
      }
      if (item.name === '广西') {
        data = ['广西地区暂无数据']
      }
      // 延时模拟请求加载
      setTimeout(() => {
        item.children = data
      }, 3000)
    }
  }
}
</script>
# Tree

### 1、基本用法
:::demo 
```html
<template>
  <div>
    <ak-tree :data="data" @click="_click"></ak-tree>
</div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          name: '广东',
          children: [
            {
              name: '广州市',
              children: [
                {name: '天河区'},
                {name: '越秀区'},
                {name: '白云区'},
                {name: '海珠区'}
              ]
            },
            {name: '深圳市'},
            {name: '东莞市'},
            {name: '湛江市'},
            {name: '阳江市'},
            {name: '清远市'}
          ]
        },
        {name: '北京'},
        {name: '上海'},
        {
          name: '广西',
          children: [
            {name: '桂林市'},
            {name: '南宁市'}
          ]
        }
      ]
    }
  }
}
</script>


```
:::

### 2、展开指定项
:::demo 
```html
<template>
  <div>
    <ak-tree :data="data2"></ak-tree>
</div>
</template>
<script>
export default {
  data () {
    return {
      data2: [
        {
          name: '广东',
          show: true,
          children: [
            {name: '广州市'},
            {name: '深圳市'}
          ]
        },
        {name: '北京', children: []},
        {name: '广西'},
        {name: '福建'},
        {name: '湖南'}
      ]
    }
  }
}
</script>

```
:::

### 3、显示对应值
:::demo 
```html
<template>
  <div>
    <ak-tree :data="data3" :showValue="true"></ak-tree>
</div>
</template>
<script>
export default {
  data () {
    return {
      data3: [
        {name: '广东', value: 1},
        {name: '北京', value: 2}
      ]
    }
  }
}
</script>

```
:::

### 4、异步加载
:::demo 
```html
<template>
  <div>
    <ak-tree :data="data4" :toggle="_toggle" :lazy="true"></ak-tree>
</div>
</template>
<script>
export default {
  data () {
    return {
      data4: [
        {name: '广东', children: []},
        {name: '北京', children: []},
        {name: '广西', children: []}
      ]
    }
  },
  methods: {
    _toggle (item, type) {
      // 这里可根据需求限制每次点击都请求加载数据
      // type=true为展开,false收起
      if (!type || item.children.length > 0) {
        return
      }
      let data = []
      if (item.name === '广东') {
        data = [
          {name: '深圳市'},
          {name: '东莞市'},
          {name: '湛江市'},
          {name: '阳江市'},
          {name: '清远市'}
        ]
      }
      if (item.name === '北京') {
        data = [
          {name: '海淀区'}
        ]
      }
      if (item.name === '广西') {
        data = ['广西地区暂无数据']
      }
      // 延时模拟请求加载
      setTimeout(() => {
        item.children = data
      }, 3000)
    }
  }
}
</script>

```
:::

## API
### Tree
|参数|类型|说明|
|-|-|-|
|data           | Array          |树数据|
|showValue      | Boolean/false  |是否在名称后面显示对应的value值|
|click          | Function       |点击事件|
|toggle         | Function       |展开或收起点击事件，回调两个参数。当前项和当事点击事件（展开/收起）|
|lazy           | Boolean/false  |表单数据|

### Tree Data
|参数|类型|说明|
|-|-|-|
|name           | String          |显示的名称|
|value          | String          |showValue为true时显示的值|
|show           | Boolean/false   |是否展开当前项|

