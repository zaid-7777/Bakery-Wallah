import React from 'react'
import me from "../../assets/WIN_20220827_21_23_42_Pro.webp"
const Users = () => {
    const arr=[1,2,3,4];
  return(
    <section className="tableClass">
      <main>
        <table>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Photo</th>
                    <th>Role</th>
                    <th>Since</th>
                </tr>
            </thead>
            <tbody>
                { arr.map((i)=>(
                        <tr key={i}>
                            <td>#sdkskrfiri </td>
                            <td> Zaid </td>
                            <td> 

                                <img src={me} alt="User"/>
                            </td>
                            <td>Admin</td>
                            <td>{"24-02-2022"}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
       </main>  
    </section>
  )
};

export default Users