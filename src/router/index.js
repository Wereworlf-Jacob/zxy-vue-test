import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Content from '@/components/Content'
import Data from '@/components/Data'
import FirstIndex from '@/components/FirstIndex'
import First from '@/components/first'
import A from '@/components/A'
import B from '@/components/B'
import A1 from '@/components/A1'
import B1 from '@/components/B1'

import Element from '@/components/Element'
import Myvue from '@/components/Myvue'
import ES6 from '@/components/ES6'
import Color from '@/components/Color'
import Menu from '@/components/Menu'

import Basic from '@/components/Basic'
import Layout from '@/components/Layout'
import Container from '@/components/Container'
import ColorContainer from '@/components/ColorContainer'
import Typography from '@/components/Typography'
import Border from '@/components/Border'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Link from '@/components/Link'

import Form from '@/components/Form'
import Radio from '@/components/Radio'
import Checkbox from '@/components/Checkbox'
import Input from '@/components/Input'
import Inputnumber from '@/components/Inputnumber'
import Select from '@/components/Select'
import Cascader from '@/components/Cascader'
import Switch from '@/components/Switch'
import Slider from '@/components/Slider'
import TimePicker from '@/components/TimePicker'
import DatePicker from '@/components/DatePicker'
import DateTimePicker from '@/components/DateTimePicker'
import Upload from '@/components/Upload'
import Rate from '@/components/Rate'
import ColorPicker from '@/components/ColorPicker'
import Transfer from '@/components/Transfer'
import Form1 from '@/components/Form1'

// import Input1 from '@/components/Input1/Input1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/a',
          component: A,
          children: [
            {
              path: '/a1',
              component: A1
            }
          ]
        },
        {
          path: '/b',
          component: B
        }
      ]
    },{//了解更多
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{//注册
      path: '/Register',
      name: 'Register',
      component: Register,
      children: [
        {
          path: '/b1',
          component: B1
        }
      ]
    },{//登录
      path: '/Login',
      name: 'Login',
      component: Login
    },{//FirstIndex
      path: '/FirstIndex',
      name: 'FirstIndex',
      component: FirstIndex,
      redirect:'/Data', // 设置默认打开的页面
      children: [
        {//Content
          path: '/Content',
          name: 'Content',
          component: Content
        },{//Data
          path: '/Data',
          name: 'Data',
          component: Data
        },{//Element
          path: '/Element',
          name: 'Element',
          component: Element,
          redirect:'/Basic', // 设置默认打开的Basic
          children: [
            {//Basic
              path: '/Basic',
              name: 'Basic',
              component: Basic,
              redirect:'/Layout', // 设置默认打开的Layout
              children: [
                {//Layout
                  path: '/Layout',
                  name: 'Layout',
                  component: Layout
                },{//Container
                  path: '/Container',
                  name: 'Container',
                  component: Container
                },{//ColorContainer
                  path: '/ColorContainer',
                  name: 'ColorContainer',
                  component: ColorContainer
                },{//Typography
                  path: '/Typography',
                  name: 'Typography',
                  component: Typography
                },{//Border
                  path: '/Border',
                  name: 'Border',
                  component: Border
                },{//Icon
                  path: '/Icon',
                  name: 'Icon',
                  component: Icon
                },{//Button
                  path: '/Button',
                  name: 'Button',
                  component: Button
                },{//Link
                  path: '/Link',
                  name: 'Link',
                  component: Link
                }
              ]
            },{//From
              path: '/Form',
              name: 'Form',
              component: Form,
              redirect:'/Radio', // 设置默认打开的 Radio
              children: [
                {//Radio
                  path: '/Radio',
                  name: 'Radio',
                  component: Radio
                },{//Checkbox
                  path: '/Checkbox',
                  name: 'Checkbox',
                  component: Checkbox
                },{//Input
                  path: '/Input',
                  name: 'Input',
                  component: Input
                },{//Inputnumber
                  path: '/Inputnumber',
                  name: 'Inputnumber',
                  component: Inputnumber
                },{//Select
                  path: '/Select',
                  name: 'Select',
                  component: Select
                },{//Cascader
                  path: '/Cascader',
                  name: 'Cascader',
                  component: Cascader
                },{//Switch
                  path: '/Switch',
                  name: 'Switch',
                  component: Switch
                },{//Slider
                  path: '/Slider',
                  name: 'Slider',
                  component: Slider
                },{//TimePicker
                  path: '/TimePicker',
                  name: 'TimePicker',
                  component: TimePicker
                },{//DatePicker
                  path: '/DatePicker',
                  name: 'DatePicker',
                  component: DatePicker
                },{//DateTimePicker
                  path: '/DateTimePicker',
                  name: 'DateTimePicker',
                  component: DateTimePicker
                },{//Upload
                  path: '/Upload',
                  name: 'Upload',
                  component: Upload
                },{//Rate
                  path: '/Rate',
                  name: 'Rate',
                  component: Rate
                },{//ColorPicker
                  path: '/ColorPicker',
                  name: 'ColorPicker',
                  component: ColorPicker
                },{//Transfer
                  path: '/Transfer',
                  name: 'Transfer',
                  component: Transfer
                },{//Form1
                  path: '/Form1',
                  name: 'Form1',
                  component: Form1
                }
              ]
            }

            
          ]
        },{//Myvue
          path: '/Myvue',
          name: 'Myvue',
          component: Myvue
        },{//ES6
          path: '/ES6',
          name: 'ES6',
          component: ES6
        },{//Color
          path: '/Color',
          name: 'Color',
          component: Color
        },{//Menu
          path: '/Menu',
          name: 'Menu',
          component: Menu
        }
      ]
    }
    
  ]
})
