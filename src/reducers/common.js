/**
 * @file 通用操作
 */

const initialState = {
    mode: true, // true为白天模式，false为夜间模式
    process: 0 // 初始进度为0
};

export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case 'CHANGE_THEME_MODE':
            // 主题色
            const themeLightColor = getComputedStyle(document.documentElement).getPropertyValue('--global-theme-color-light');
            const themeDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--global-theme-color-dark');

            document.documentElement.style.setProperty('--global-theme-color', payload ? themeLightColor : themeDarkColor);

            // header颜色
            const headerLightColor = getComputedStyle(document.documentElement).getPropertyValue('--header-background-color-light');
            const headerDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--header-background-color-dark');
            const fontLightColor = getComputedStyle(document.documentElement).getPropertyValue('--font-color-light');
            const fontDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--font-color-dark');

            document.documentElement.style.setProperty('--header-background-color', payload ? headerLightColor : headerDarkColor);
            document.documentElement.style.setProperty('--font-color', payload ? fontLightColor : fontDarkColor);

            // body颜色
            const bodyLightColor = getComputedStyle(document.documentElement).getPropertyValue('--body-color-light');
            const bodyDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--body-color-dark');

            document.documentElement.style.setProperty('--body-color', payload ? bodyLightColor : bodyDarkColor);

            // 通用
            const fontHoverLightColor = getComputedStyle(document.documentElement).getPropertyValue('--font-color-hover-light');
            const fontHoverDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--font-color-hover-dark');
            const fontNormalColor = getComputedStyle(document.documentElement).getPropertyValue('--font-color-normal');

            document.documentElement.style.setProperty('--font-color-hover', payload ? fontHoverLightColor : fontHoverDarkColor);
            document.documentElement.style.setProperty('--article-title-color', payload ? fontNormalColor : fontDarkColor);

            const borderLightColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color-light');
            const borderDarkColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color-dark');

            document.documentElement.style.setProperty('--border-color', payload ? borderLightColor : borderDarkColor);

            return {
                ...state,
                mode: payload
            };
        case 'CHANGE_PROCESS':
            return {
                ...state,
                process: payload
            };
        default:
            return state;
    }
}