// action  Action类型用户触发
export const type = {
    SWITCH_MENU: ' SWITCH_MENU'
}

export function switchMenu(menuName){
    return {
        type: type.SWITCH_MENU,
        menuName
    }
}