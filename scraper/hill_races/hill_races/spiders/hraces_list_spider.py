import scrapy
import re

class RaceItem(scrapy.Item):
    model = scrapy.Field()
    pk = scrapy.Field()
    fields = scrapy.Field()


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
            if ((climbs[index+1]).strip() != ""):
                grabbedName = elem
                grabbedDate = dates[index + 1]
                strippedDate = grabbedDate[4:]
                grabbedVenue = venues[index + 1]
                grabbedDistance = float(distances[index + 1])
                grabbedClimb = int(climbs[index + 1])
                fields ={"name": grabbedName, "date": strippedDate, "location":grabbedVenue, "distance":grabbedDistance, "climb": grabbedClimb}
                yield RaceItem(model="catalog.race", pk= (index + 1), fields=fields )
