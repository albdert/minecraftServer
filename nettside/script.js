try{
    const res = await fetch('https://api.mcsrvstat.us/3/158.248.114.241:25565');
    const data = await res.json();
    console.log(data);

}
catch(error){
    console.error(error);
}