import "./widgetLg.css"

export default function WidgetLg() {
    const Button =({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle"> Info Serveur </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                   <th className="widgetLgTh">Nom de machine</th>
                   <th className="widgetLgTh">Date Création</th>
                   <th className="widgetLgTh">IP</th>
                   <th className="widgetLgTh">Version</th>
                   <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Minecraft</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">1.2.3.4</td>
                        <th className="widgetLgVersion">1.2.3.4</th>
                        <td className="widgetLgStatus">
                        <Button type="Declined" />            
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Cs go</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">1.2.3.4</td>
                        <th className="widgetLgVersion">1.2.3.4</th>
                        <td className="widgetLgStatus">
                        <Button type="Approved" />            
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Rocket League</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">1.2.3.4</td>
                        <th className="widgetLgVersion">1.2.3.4</th>
                        <td className="widgetLgStatus">
                        <Button type="Pending" />            
                    </td>
                </tr>
            </table>
        </div>
    )
}
