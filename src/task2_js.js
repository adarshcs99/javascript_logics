var mall = []; // product object
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
        return;
    }

   if(index_increase!=0)
   {
       let flag=0;
       for(var i=0;i<mall.length;i++)
       {
           if(mall[i]["Price_id"] == id)
           {
              alert("id already exsist");
              flag=1;
              break
           }
       }
       if(!flag)
       {
            
            mall.push({"Price_id":id,"Price_name":name,"Price":pri}); // product items pushed
            table_add+=`<tr id=${index_increase}>`;
            document.getElementById("table_show").innerHTML = table_add+=`<td>${id}</td><td>${name}</td><td>${pri}</td></tr>`;
            index_increase+=1;
       }
       
   }
   else{
    
            mall.push({"Price_id":id,"Price_name":name,"Price":pri});
            table_add+=`<tr id=${index_increase}>`;
            document.getElementById("table_show").innerHTML = table_add+=`<td>${id}</td><td>${name}</td><td>${pri}</td></tr>`;
            index_increase+=1;
       
           
   }
    
}


