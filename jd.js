
let MAX_EPOCH = 32 //最大执行次数
try {
    auto();
} catch (error) {
    toast("请手动开启无障碍并授权给Auto.js"); sleep(2000); exit();
}
console.show()

//获取对应的任务按钮
function get_task(pat) {
    let x = textContains("邀请好友").findOne(5000)
    list_x = x.parent().children()
    for (let i = 0; i < list_x.length; i++) {
        txt = list_x[i].text()
        if (txt.indexOf(pat) > -1 && list_x[i + 1].text() != "已完成") {
            return list_x[i + 1]
        }
    }
    return null
}

//浏览5个商品
function browse_five_goods_task() {
    sleep(1000); scrollDown(); sleep(1000);
    list_money = textStartsWith('¥').find()
    for (let i = 0; i < 5 && list_money.length >= 5; i++) {
        x = list_money[i]
        click(x.bounds().centerX(), x.bounds().centerY())
        sleep(1000); back(); sleep(1000)
    }
    back()
}

//加购5个商品
function purchase_five_goods_task() {
    sleep(2000)
    list_money = idContains("jmdd-react-smash").find()
    for (let i = 0; i < 5; i++) {
        list_money[i].click()
        sleep(1000)
    }
    back()
}


//等待用户进入活动主界面
while (true) {
    let btn_get = text("领金币").findOne(2000)
    if (btn_get) {
        btn_get.click(); break;
    }
    console.log('程序启动成功，等待用户进入活动主界面')
}

//执行简单8秒任务 
console.log('开始执简单8秒任务 ')
for (let i = 0; i < MAX_EPOCH; i++) {
    let btn_todo = get_task("8秒")
    if (!btn_todo) break
    btn_todo.click()
    sleep(Math.ceil(Math.random() * 3000) + 11000); back()
}
console.log('执行简单8秒任务，完成')

//浏览5个商品
console.log('开始执行浏览5个商品任务')
for (let i = 0; i < MAX_EPOCH; i++) {
    let btn_todo = get_task("浏览5个商品")
    if (!btn_todo) break
    btn_todo.click()
    browse_five_goods_task()
}

//加购5个商品
console.log('开始执行加购5个商品')
for (let i = 0; i < MAX_EPOCH; i++) {
    let btn_todo = get_task("加购5个商品")
    if (!btn_todo) break
    btn_todo.click()
    purchase_five_goods_task()
}
console.log('加购5个商品，完成')

//执行简单浏览任务(无时间限制)
console.log('开始执行简单浏览任务(无时间限制)')
for (let i = 0; i < MAX_EPOCH; i++) {
    let btn_todo = get_task("浏览可得")
    if (!btn_todo) break
    btn_todo.click()
    sleep(1000); back(); sleep(1000);
}
console.log('简单浏览任务(无时间限制)，完成')
