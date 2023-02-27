var config = {
    style: 'mapbox://styles/oballinger/cle6xsakw005d01noq4sp1ad5',
    accessToken: 'pk.eyJ1Ijoib2JhbGxpbmdlciIsImEiOiJjbGU2eGVwNWkwMDF5M3BxZ2hsNG1hZnRhIn0.1oaatYhFejRNFg5sKbBMaw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    byline: 'An IJF Project',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Iraq Oil</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            showMarkers: false,
            title: 'Introduction',
            description:'Few countries have oil reserves as deep as Iraq. The extractive industries bring jobs and tax revenues to a nation that has been hobbled by invasion, war and insurgency for close to two decades. Yet this economic activity comes at a cost.',
            //image: './path/to/image/source.png',
            location: {
                center: [47.63971630637197, 30.864251205277863],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'flaring',
                    opacity: 0,
                    duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Basra',
            //image: './path/to/image/source.png',
            description: 'The southern region of Basra is home to marshes and wetlands, several of which are UNESCO world heritage sites due to their high biodiversity and conservation importance. These waterways are also important to local residents who depend on them for drinking water, sanitation, agriculture, and fishing.',
            location: {
                center: [47.63971630637197, 30.864251205277863],
                zoom: 8,
                pitch: 0,
                //bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: 'flaring',
                    opacity: 1,
                    duration: 1000
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Oil Extraction',
            image: 'https://static.independent.co.uk/2021/04/16/08/Iraq%20flaring.jpg?quality=75&width=990&auto=webp&crop=2048:1536',
            description: 'However, this area also holds around 70% of Iraq\'s oil reserves. Oil wells, refineries, and heavy industrial activity exist in close proximity to critical waterways and residential areas. The red dots on the map show the locations of methane flares, a highly polluting practice that has been linked to serious diseases including cancer.',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'flaring',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Nahran Omar',
            description: 'Lots of people live close to flares in Nahran Omar; the red dot in the middle indicates the location of a flare, while residential buildings are shown in yellow. ',
            location: {
                center: [47.66319259495863,30.752246761912936],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Zubayr-1',
            alignment: 'fully',
            hidden: false,
            title: 'Zubayr',
            description: 'The same is true in Zubayr.',
            location: {
                center: [47.72376243818048, 30.327546229067686],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Zubayr-2',
            alignment: 'fully',
            hidden: false,
            title: 'Zubayr 2',
            location: {
                center: [47.637488, 30.368208],
                zoom: 15,
                pitch: 60,
                bearing: 300
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'dam-1',
            alignment: 'right',
            hidden: false,
            title: 'Al-Ahqaf',
            description: 'Air pollution from flaring isn\'t the only problem caused by oil extraction. Villagers in Al-Ahqaf depend on the nearby marshes for agriculture.',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            location: {
                center: [47.64338594736393, 30.59019156439123],
                zoom: 15,
                pitch: 20,
                bearing: 0
            }
        },
        {
            id: 'dam-2',
            alignment: 'right',
            hidden: false,
            description: 'The satellite image shown here, taken in October 2019, shows the marshes flooded with water.',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            location: {
                center: [47.64338594736393, 30.59019156439123],
                zoom: 13,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'water',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'landuse-overlay',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'oballinger-91gerqnu',
                    opacity: 1,
                    duration: 1000
                }
                ,
                {
                    layer: 'oballinger-9prychxy',
                    opacity: 1,
                    duration: 1000
                }
                ,
                {
                    layer: 'oballinger-5ytevws4',
                    opacity: 1,
                    duration: 1000
                }
                ,
                {
                    layer: 'oballinger-bdfcwdso',
                    opacity: 1,
                    duration: 1000
                }
            ],            
            onChapterExit: [
            {
                layer: 'oballinger-91gerqnu',
                opacity: 0,
                duration: 1000
            }
            ,
            {
                layer: 'oballinger-9prychxy',
                opacity: 0,
                duration: 1000
            }
            ,
            {
                layer: 'oballinger-5ytevws4',
                opacity: 0,
                duration: 1000
            }
            ,
            {
                layer: 'oballinger-bdfcwdso',
                opacity: 0,
                duration: 1000
            }
        ]
        },
        {
            id: 'dam-3',
            alignment: 'right',
            hidden: false,
            description: 'In 2020, the Italian oil company ENI built a dam, visible in the top-left corner. This led marshes in Al-Ahqaf to dry up, as shown in the satellite image from October 2022.',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            location: {
                center: [47.64338594736393, 30.59019156439123],
                zoom: 13,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'oballinger-73oc47bq',
                    opacity: 1,
                    duration: 1000
                }
                ,
                {
                    layer: 'oballinger-d4duvnc0',
                    opacity: 1,
                    duration: 1000
                }
                ,
                {
                    layer: 'oballinger-30h50yi8',
                    opacity: 1,
                    duration: 1000
                }
                ,
                {
                    layer: 'oballinger-81jxme5y',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'water',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'landuse-overlay',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'oballinger-73oc47bq',
                    opacity: 0,
                    duration: 1000
                }
                ,
                {
                    layer: 'oballinger-d4duvnc0',
                    opacity: 0,
                    duration: 1000
                }
                ,
                {
                    layer: 'oballinger-30h50yi8',
                    opacity: 0,
                    duration: 1000
                }
                ,
                {
                    layer: 'oballinger-81jxme5y',
                    opacity: 0,
                    duration: 1000
                }
            ]
        }
    ]
};
