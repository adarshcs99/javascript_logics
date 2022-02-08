function dis()
{
    let name = document.getElementById("Name").value;
    let Age = Number(document.getElementById("Age").value);
    let Weight = Number(document.getElementById("Weight").value);
    let show = "";
    if(Age >=5 && Age<=7)
    {
       if(Weight>=15 && Weight <= 20)
       {
           show+= `Hello ${name} !!! your Weight is Perfect`; 
       }
       else if(Weight<15)
       {
        show+= `Hello ${name} !!! your Weight is less then the recommended value of 15KG at an age ${Age}`; 
       }
       else{
        show+= `Hello ${name} !!! your Weight is greater then the recommended value of 20KG at an age ${Age}`; 
       }

    }
   
    else if(Age >=8 && Age<=10)
    {
        if(Weight>=21 && Weight <= 25)
       {
           show+= `Hello ${name} !!! your Weight is Perfect`; 
       }
       else if(Weight<21)
       {
        show+= `Hello ${name} !!! your Weight is less then the recommended value of 21KG at an age ${Age}`; 
       }
       else{
        show+= `Hello ${name} !!! your Weight is greater then the recommended value of 25KG at an age ${Age}`; 
       }

    }
    else if(Age >=11 && Age<=15)
    {
        if(Weight>=26 && Weight <= 30)
       {
           show+= `Hello ${name} !!! your Weight is Perfect`; 
       }
       else if(Weight<26)
       {
        show+= `Hello ${name} !!! your Weight is less then the recommended value of 26KG at an age ${Age}`; 
       }
       else{
        show+= `Hello ${name} !!! your Weight is greater then the recommended value of 30KG at an age ${Age}`; 
       }

    }
   else
    {
        if(Weight>=31 && Weight <= 40)
       {
           show+= `Hello ${name} !!! your Weight is Perfect`; 
       }
       else if(Weight<31)
       {
        show+= `Hello ${name} !!! your Weight is less then the recommended value of 31KG at an age ${Age}`; 
       }
       else{
        show+= `Hello ${name} !!! your Weight is greater then the recommended value of 40KG  at an age ${Age}`; 
       }

    }
    document.getElementById("showplay").innerHTML = show;
}