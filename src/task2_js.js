var mall = {
    Price_id:[],
    Price_name:[],
    Price:[]
}; 

var table_add = "";
var index_increase = 0;
function dis()
{
    let id =  Number(document.getElementById("pid").value);
    let pri = Number(document.getElementById("Price").value);
    let name = document.getElementById("Pname").value;
    if(id == "" || pri=="" || name == "")
    {
        alert("please fill all the required feilds");
    }


   if(index_increase!=0)
   {
       let flag=0;
       for(var i=0;i<mall.Price_id.length;i++)
       {
           if(mall.Price_id[i] == id)
           {
              alert("id already exsist");
              flag=1;
              break
           }
       }
       if(!flag)
       {
            mall.Price_id[index_increase] = id;
            mall.Price_name[index_increase] = name;
            mall.Price[index_increase] = pri;

            table_add+=`<tr id=${index_increase}>`;
            
            document.getElementById("table_show").innerHTML = table_add+=`<td>${mall.Price_id[index_increase]}</td><td>${mall.Price_name[index_increase]}</td><td>${mall.Price[index_increase]}</td></tr>`;
            index_increase+=1;
       }
       
   }
   else{
    
        mall.Price_id[index_increase] = id;
        mall.Price_name[index_increase] = name;
        mall.Price[index_increase] = pri;

        table_add+=`<tr id=${index_increase}>`;
        
        document.getElementById("table_show").innerHTML = table_add+=`<td>${mall.Price_id[index_increase]}</td><td>${mall.Price_name[index_increase]}</td><td>${mall.Price[index_increase]}</td></tr>`;
        index_increase+=1;
           
   }
    
}


