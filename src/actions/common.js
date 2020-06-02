/**
 * @file 通用操作
 */

// 修改主题
export const changeTheme = payload => ({
    type: 'CHANGE_THEME_MODE',
    payload
});

// 进度条
export const changeProcess = payload => ({
    type: 'CHANGE_PROCESS',
    payload
});