import Head from "next/head";

const About = () => {
    return ( 
        <>
        <Head>
      <title>Ninja List | About</title>
      <meta name="keywords" content="ninjas" />
    </Head>
        <div>
            <h1>Water Conservation Tips</h1>
            <ul>
        <li>Check for Leaks: Regularly inspect toilets, faucets, and pipes for leaks and repair them promptly.</li>

        <li>Shorten Showers: Limit shower time to save gallons of water.</li>
        <li>Efficient Dishwashing: Only run dishwashers and washing machines with full loads to maximize water efficiency.</li>
        <li>Mindful Watering: Water lawns only when necessary and during cooler parts of the day to reduce evaporation.</li>
        <li>Educate Others: Teach children about the importance of water conservation to instill good habits.</li>
      </ul>
        </div>
        <div>
            <h1>Track Your Water Usage</h1>
            <ul>
                <li>Monitor Consumption: Keep track of your monthly water bill to identify usage patterns.</li>
                <li>Install a Water Meter: Consider installing a water meter to measure your daily water usage accurately.</li>
                <li>Use Apps: Utilize mobile apps designed for tracking water usage and providing conservation tips.</li>
                <li> Regular Audits: Conduct regular water audits to assess where you can improve efficiency in your home.</li>
            </ul>
        </div>
        </>
     );
}
 
export default About;