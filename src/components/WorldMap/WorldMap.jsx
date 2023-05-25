import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { useState } from 'react'

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export const WorldMap = ({handleStepValueChange}) => {

    const [selectedGeo, setSelectedGeo] = useState(null);

    const handleClick = (geo) => {
        setSelectedGeo(geo);
        handleStepValueChange(geo.properties.name);
    };

    return(
        <ComposableMap
        height='500'
        >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                geographies.map((geo) => (
                    <Geography 
                    key={geo.rsmKey} 
                    geography={geo}
                    outline='#000000'
                    fill={selectedGeo === geo ? "#AEE9D1" : "#ECECEC"} 
                    onClick={() => handleClick(geo)}
                    />
                ))
                }
            </Geographies>
        </ComposableMap>
    )
}