const  Logo = ()=>{
    return "logo"
}
let icons = {
    logo:Logo
}
const Icon  = ({name = "",...props})=>{
    let IconItem = icons[name];
    return props
}

l = Icon({name:"logo",j:90});
console.log(l)