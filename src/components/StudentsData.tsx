type studentDataTable = {

    datasource: any[];
    cols: any[];

}

export default function StudentsData(props :studentDataTable){
    const {datasource,cols} = props;


    return(
        <>

        <div className="container">
            <h2> Check your result Given Below</h2>
    
            <table border={1} className="table" >
                <thead>
                    <tr>
                        {
                            cols.map((x,i)=> <th>{x.heading}</th>)
                        }

                    </tr>
                </thead>
                <tbody>
                    {datasource.map((row,i)=><tr>
                        {
                            cols.map((col,i)=><td>{row[col.key]}</td>)
                        }
                    </tr>)}
                    <tr>

                    </tr>
                </tbody>


            </table>
        </div>
        </>
    )
 
}