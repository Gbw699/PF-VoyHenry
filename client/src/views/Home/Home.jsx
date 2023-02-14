import React from "react"
import NavBar from "../../"
import HomePlansCardList from "../../components/HomePlansComponent/HomePlansCardList"

export default function Home () {
    return (
        <>
            {/* 
                NAVBAR
                PROFILE INFO
                PLANS
                SECTIONS (FILTERED-PLANS)
                BLOG REVIEW
                FOOTER
            */}
            <NavBar/>
            <HomePlansCardList />
        </>
    )
}