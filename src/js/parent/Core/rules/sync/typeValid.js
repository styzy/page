/**
 * 参数类型检查
 * @param {*} value 
 * @param {*} requireTypes 
 */
const typeValid = function(value, requireTypes) {
    if (typeof requireTypes === 'function') {
        requireTypes = [requireTypes]
    }
    let valueType = ''
    if (value instanceof HTMLElement) {
        valueType = 'HTMLElement'
    } else {
        valueType = Object.prototype.toString.call(value).substr(8).replace(']', '')
    }
    return requireTypes.some(requireType => requireType.name === valueType)
}

export default typeValid