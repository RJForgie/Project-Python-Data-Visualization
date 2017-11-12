import scrapy
import re

class RaceItem(scrapy.Item):
    name = scrapy.Field()
    date = scrapy.Field()
    venue = scrapy.Field()
    distance = scrapy.Field()
    climb = scrapy.Field()


class RaceSpider(scrapy.Spider):
    name = 'race_list'
    allowed_domains = ['scottishhillracing.co.uk']
    start_urls = [
        "http://www.scottishhillracing.co.uk/Races.aspx"
    ]

    def parse(self, response):
        links = response.xpath('//*[@id="dgRacesAll"]//a/text()').extract()
        dates = response.xpath('//*[@id="dgRacesAll"]//td[position()=1]/text()').extract()
        venues = response.xpath('//*[@id="dgRacesAll"]//td[position()=5]/text()').extract()
        distances = response.xpath('//*[@id="dgRacesAll"]//td[position()=6]/text()').extract()
        climbs = response.xpath('//*[@id="dgRacesAll"]//td[position()=7]/text()').extract()
        for index, elem in enumerate(links):
            grabbedName = elem
            grabbedDate = dates[index + 1]
            strippedDate = grabbedDate[4:]
            grabbedVenue = venues[index + 1]
            grabbedDistance = distances[index + 1]
            grabbedClimb = climbs[index + 1]
            yield RaceItem(name=grabbedName, date = strippedDate, venue = grabbedVenue, distance = grabbedDistance, climb=grabbedClimb)

    
