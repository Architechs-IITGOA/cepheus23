import React from "react";
import "./Profile.css"

export default function Profile() {
    return (
        <div class="row">
            <div class="column" style="background-color: #003153; color: white; flex: 40%;">
                <div class="column-content">
                    <img src="avatars/21616081_100-01.png"></img>
                    <p style="font-family: headerFont;"> Raghavendra Singh </p>
                    <p> Indian Institute of Technology (IIT), Goa </p>
                    <p> gstechnical@iitgoa.ac.in </p>
                    <p> 9785075997 </p>
                    <p> <span style="font-family: headerFont;"> Score </span> - 500 </p>
                </div>
            </div>
            <div class="column" style="background-color: #003153; flex: 60%; ">
                <div class="subcolumns" style="height: 40%;"> 
                    <h2 style="font-family: headerFont; text-align: center;"> Participated Events </h2>
                    <ol>
                        <li> Treasure Hunt </li>
                        <li> Beat The Street </li>
                        <li> Play Wit Microbit </li>
                        <li> Treasure Hunt </li>
                        <li> Beat The Street </li>
                        <li> Play Wit Microbit </li>
                        <li> Treasure Hunt </li>
                    </ol>
                </div>
            <div class="subcolumns" style="height: 60%;"> 
                <h2 style="font-family: headerFont; text-align: center; color: #D4AF37;"> Treasure Hunt </h2>
                <img alt="dumy" src="Used Elements-20221127T203156Z-001/27668421_99z_graduation_podium_laurel_2022 [Converted]-01.png"></img>
                <img alt="dumy" src="Used Elements-20221127T203156Z-001/12009039_abstract1-06 [Converted]-01.png" style="width: 25%; height: 25%; z-index: 2;"></img>
                {/* style="width: 25%; height: 25%; z-index: 1; position: absolute;" */}
                <table>
                    <th>
                        <td> Rank </td>
                        <td> </td>
                        <td> Player's Name </td>
                        <td> Score </td>
                    </th>
                    <tr>
                        <td> Rank 1</td>
                        <td> img </td>
                        <td> Raghavendra Singh </td>
                        <td> 300 </td>
                    </tr>
                    <tr>
                        <td> Rank 2</td>
                        <td> img </td>
                        <td> Raghavendra Singh </td>
                        <td> 200 </td>
                    </tr>
                    <tr>
                        <td> Rank 3</td>
                        <td> img </td>
                        <td> Raghavendra Singh </td>
                        <td> 100 </td>
                    </tr>
                </table>
                <h4> Your Rank: 10</h4>
            </div>
        </div>
    </div>
    )
}