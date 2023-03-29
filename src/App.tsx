import { useEffect, useState } from 'react'
import JSONstat from 'jsonstat-toolkit'
import CountrySelector from './components/countrySelector'
import Graph from './components/graph'
import { APIDataPoint, DataPoint, Country, defaultGraphData, allCountries } from './typesAndConsts'

function App() {

  const [graphData, setGraphData] = useState<DataPoint[]>(defaultGraphData)
  const [selectedCountry, setSelectedCountry] = useState<Country>(allCountries[0]) // first country as default

  const getData = ()=>{

    const filter = `A.RT.TOTAL.M+F.REG_UNE.TOT2_7.${selectedCountry.iso}`
    const apiURL = `https://webgate.ec.europa.eu/empl/redisstat/api/dissemination/sdmx/2.1/data/lmp_ind_actru/${filter}?format=json&compressed=false&lang=en`
    
    /*
    Dataset filter explanation
    . seperated list of dimensions in order as they appear in the dataset

    A: Frequency (Annual)
    RT: Unit (Rate)
    TOTAL: Age (Total)
    M+F: Sex (both male and female)
    REG_UNE: Registered unemployed
    TOT2_7: Total LMP measures (categories 2-7)
    ${selectedCountry.iso}: The selected country

    The last one, TIME_PERIOD is handled separately, and we igenore it because we want data from all years available.

    */

    JSONstat(
      // See the readme for source code of the cors proxy
      `https://cors-proxy.joakimjohansson.se/${apiURL}`,
      {
        // Fetch options object, can be used for handling custom cache rules etc.
      }
    ).then((JSONStatData:any)=>{

      const rawData = JSONStatData.Dataset(0).toTable({ type: "arrobj" }) as APIDataPoint[]

      // Lets make it into our DataPoint format that has female and male data combined into one object for easier use in the graph
      const data:DataPoint[] = []
      rawData.forEach((rawDataPoint)=>{
        const index = data.findIndex((existingDataPoint)=>existingDataPoint.year===rawDataPoint.TIME_PERIOD)

        if (index >= 0) {
          // Add gender-value to the already existing object
          if (rawDataPoint.SEX === "Males") {
            data[index].male = rawDataPoint.value || 0 // add 0 if value is null
          } else if (rawDataPoint.SEX === "Females") {
            data[index].female = rawDataPoint.value || 0 // add 0 if value is null
          }
        } else {
          data.push({
            year: rawDataPoint.TIME_PERIOD,
            male: rawDataPoint.SEX === "Males" ? (rawDataPoint.value||0) : 0,
            female: rawDataPoint.SEX === "Females" ? (rawDataPoint.value||0) : 0,
          })
        }
      })

      data.sort((a, b)=> parseInt(a.year) - parseInt(b.year))

      setGraphData(data)

    }).catch((error:Error)=>{
      console.error(error)
      alert(error)
      // Handle error here
      // For example if the api server is down or the user is offline
      // Would be nice to display en error message to use user or show a cached version of the data from our own server while telling the user that the data might be old, but I feel like statistical data probably never change after the fact.
    })
  }

  useEffect(() => {
    getData()
  }, [selectedCountry])

  return (
    <>
      <div className="bg-white pt-24 px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Unemployment Rates</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here you can see the unemployment rates in EU countries. The data is from Eurostat. Diveded up by male and female. Choose a country below to see the data.
          </p>
          <div className="my-6 grid justify-center">
            <CountrySelector onCountryChange={(country:Country)=>setSelectedCountry(country)}/>
          </div>
        </div>
      </div>
      <Graph graphData={graphData} country={selectedCountry} />
    </>
  )
}

export default App