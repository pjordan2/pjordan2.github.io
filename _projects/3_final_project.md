---
name: IS445 Final Project
tools: [Python, Altair, Vega]
image: assets/pngs/country_medal_count.png
description: Interactive Data Visualization Article for my final project in IS445.
custom_js:
  - vega.min
  - vega-lite.min
  - vega-embed.min
  - justcharts
---


# A Century of Olympic Achievements

By: Porscha Henderson


### Understanding the Data

The dataset we're exploring contains various information about Olympic athletes and their results starting in the 1896 Athens games to the 2016 Rio Olympics. It includes details such as the athletes' names, genders, ages, heights, weights, what country they participated for, and the medals they won.

An interesting trend we can observe from this dataset is the specialization of athletes over time. In the early Olympics, it wasn't uncommon for athletes to compete in multiple, often unrelated events. Today, Olympians will focus on a single discipline, perfecting their performance in a specific event through specialized training and techniques.

Another fascinating aspect of the data is the impact of geopolitical changes on Olympic participation. The dissolution of the Soviet Union, for example, led to the emergence of many new national teams in the 1990s. Similarly, the reunification of Germany affected that country's Olympic representation.

### Olympic Achievements by Country

The Olympic Games have captivated the world for over a century, showcasing the top abilities of human athletic achievement. Starting with just 14 countries in the 1896 games to the over 200 countries that compete today, the Olympics have always been a time to bring together people from different kinds of diverse backgrounds to celebrate each other's culture and achievements.

<vegachart schema-url="{{ site.baseurl }}/assets/json/altair_medal_count_final.json" style="width: 100%"></vegachart>

From this plot we can see several interesting patterns and fluctuations in Olympic performance over time. Most notably, there are significant spikes and variations in medal counts, with some countries showing dramatic peaks at certain points. For example, there's a remarkable peak for the Soviet Union (URS) around 1980 that stands out prominently. The graph also demonstrates how different nations' performances have evolved, with some showing consistent strength while others display more variable results. The more recent years (from 1990 onwards) show a more competitive landscape with multiple countries achieving similar medal counts, indicated by the closer clustering of lines. The vertical axis measures the total medal count, ranging from 0 to 500, while the horizontal axis spans over a century of Olympic competitions, making this a comprehensive visualization of Olympic success across major sporting nations. It's also important to note that when counting these medals, every single athlete counts as a medal. So for teams sports like basketball, all 12 players on the roster will count as 12 medals.

### Top 10 Sports Earnings

<vegachart schema-url="{{ site.baseurl }}/assets/json/altair_sports_earnings.json" style="width: 100%"></vegachart>

The chart above shows the top 10 sports ranked by total athlete earnings in millions of dollars according to Forbes from 1990-2020. Basketball leads the chart with approximately $3,418.1 million in total earnings, followed by boxing at $2,298.8 million and soccer at $2,223.5 million. 

This earnings distribution shows an interesting contrast to Olympic medal counts. While basketball, boxing, and soccer dominate athlete earnings, these sports typically don't lead Olympic medal counts. Swimming and athletics (track and field), which aren't even present in the top 10 earnings list, typically have the highest medal counts at the Olympics. For example, the United States' Olympic success is largely built on swimming and athletics, while their highest-earning sport (basketball) only provides one medal opportunity per gender. Similarly, while tennis and golf show significant earnings, they are relatively new to the Olympics and offer limited medal opportunities. This disparity highlights how commercial success in sports doesn't necessarily correlate with Olympic achievement, as Olympic sports often prioritize amateur status and competitive diversity over commercial potential.

### Earnings by Country

<vegachart schema-url="{{ site.baseurl }}/assets/json/altair_nationality_earnings.json" style="width: 100%"></vegachart>

The horizontal bar chart above displays the top 10 nationalities ranked by total athlete earnings in millions of dollars. The United States dominates with approximately $8,786.3 million in total earnings, followed by Portugal and Switzerland with $767.1 and $761.1 million respectively. Other top-earning nations include Argentina ($718.5M), Germany ($639M), UK ($443.2M), Brazil ($422M), Philippines ($242M), Finland ($129M), and Italy ($128M).

This earnings distribution shows an interesting parallel to Olympic medal counts, though with notable differences. While the United States' leading position in athlete earnings aligns with their historical Olympic dominance, many traditional Olympic powerhouses are not seen in this top earnings list. For instance, China and Russia, consistently among the top Olympic medal winners with the United States, don't appear in the highest-earning nations. Conversely, countries like Portugal and Switzerland show high athlete earnings despite typically modest Olympic medal counts. This suggests that financial success in sports doesn't necessarily correlate with Olympic achievement, as Olympic success often depends more on state-sponsored athletic programs and development of sports that may not be the most lucrative commercially. The presence of smaller nations like the Philippines and Finland in the top earnings list, primarily due to individual athlete success in professional sports, contrasts with their relatively limited Olympic medal tallies.


## Search The Data & Methods

<div class="left">
{% include elements/button.html link="https://raw.githubusercontent.com/rgriff23/Olympic_history/refs/heads/master/data/athlete_events.csv" text="The Main Data" %}
{% include elements/button.html link="https://www.kaggle.com/datasets/parulpandey/forbes-highest-paid-athletes-19902019/data" text="Contextual Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/pjordan2/pjordan2.github.io/blob/main/python_notebooks/final_project.ipynb" text="The Analysis" %}
</div>
