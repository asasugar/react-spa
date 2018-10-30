import { action, observable } from 'mobx'
class Global {
  // 创建全局变量
  @observable
  number = 0
  @action
  add() {
    // 这里的@action就是和严格模式配套使用的装饰器，表示允许该函数修改@observable的值
    this.number++
  }
}
const global = new Global()
export default global
