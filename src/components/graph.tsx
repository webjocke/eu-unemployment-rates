import { DataPoint, Country } from '../typesAndConsts'

export default function CountrySelector({graphData, country}:{graphData:DataPoint[], country:Country}) {

    // Get the heightest Y value from the dataset (from either male or female)
    const maxY = graphData.reduce((max, dataPoint) => Math.max(max, dataPoint.female, dataPoint.male), 0)

    return (
        <div className="max-w-full px-6 flex overflow-x-auto 2xl:justify-center">
            <div className="flex flex-col flex-nowrap py-8 px-10 bg-slate-100 mb-6">
                <div className="mb-2 grid grid-flow-col justify-start items-center">
                    <img alt={`Flag of ${country.label}`} className="inline-block w-5 h-3 mr-1" src={country.imageUrl}/>
                    <p>{country.label}</p>
                </div>
                <div className="grid grid-rows-[1fr_min-content] gap-1">
                    <div className="h-96 grid grid-flow-col gap-1">
                        {graphData.map((dataPoint) => {

                            // Calculate height (procent of maximum) for each genders bar
                            const maleHeight = dataPoint.male / maxY * 100 + "%"
                            const femaleHeight = dataPoint.female / maxY * 100 + "%"

                            // Title strings for each bar
                            const maleTitle = `Male ${dataPoint.year}: ${dataPoint.male}`
                            const femaleTitle = `Female ${dataPoint.year}: ${dataPoint.female}`

                            return (
                                <div key={dataPoint.year} className="w-12 grid grid-flow-col items-end">
                                    <div className="bg-blue-500" title={maleTitle} style={{height:maleHeight}}></div>
                                    <div className="bg-pink-500" title={femaleTitle} style={{height:femaleHeight}}></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="grid grid-flow-col gap-1 text-center">
                        {graphData.map((dataPoint) => {
                            return <div key={dataPoint.year} className="w-12">{dataPoint.year}</div>
                        })}
                    </div>
                </div>
                <div className="mt-4 grid grid-flow-col justify-start items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-blue-500"></span> Male <span className="inline-block w-2 h-2 bg-pink-500"></span> Female
                </div>
            </div>
        </div>
    )
}