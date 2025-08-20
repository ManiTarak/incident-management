sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/incidents/test/integration/FirstJourney',
		'ns/incidents/test/integration/pages/IncidentsSetList',
		'ns/incidents/test/integration/pages/IncidentsSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsSetList, IncidentsSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/incidents') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsSetList: IncidentsSetList,
					onTheIncidentsSetObjectPage: IncidentsSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);