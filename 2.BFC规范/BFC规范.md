# BFC 规范
## 一、什么是 BFC 规范
1. BFC 直译为块级格式化上下文，它是一个独立渲染的区域，只有 Block-level box 参与，它规定了内部的 Block-level box 如何布局，并且与这个区域外部无关。   
2. （*）Block-level box: dislay 属性为 $\color{#6CF}{block}$、$\color{#6CF}{list-item}$、$\color{#6CF}{table}$ 的元素，会生成 Block-level box。
---
## 二、BFC 的规矩规则
1. BFC 中的 box 垂直排列
2. BFC 内部的两个相邻的 box 的外边距重叠
3. 元素的 margin box 的左边与包含元素的 border box 的左边相接触（从左往右的格式，否则相反），即使存在浮动也一样。
4. BFC 区域与 float box 不重叠
5. BFC 是一个独立的容器，里面的元素不会影响外面的元素，外面的元素也不会影响里面的元素。
---
## 三、如何生成 BFC
1. 根元素；
2. float 属性不为：none；
3. （*）display 属性为：inline-block、table-cell、flex、line-flex；
4. position 属性不为：relative、static；
5. overflow 属性不为：visiable。
---
## 四、 BFC 的作用
1. 利用 BFC 消除外边距重叠
2. 自适应两栏布局
3. 清除浮动