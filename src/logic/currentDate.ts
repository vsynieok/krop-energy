function padWithTwo(n: number) {
    return n.toString().padStart(2, '0')
}

export function getTodayFormatted() {
    let now = new Date()
    
    return `${padWithTwo(now.getDate())}.${padWithTwo(now.getMonth() + 1)}.${padWithTwo(now.getFullYear())}`
}