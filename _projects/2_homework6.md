---
name: IS445 Jekyll Visualizations
tools: [Python, Altair, Vega]
image: assets/pngs/interactive_scatter.png
description: This is my homework 5 project that uses altair for interactive visualizations!
custom_js:
  - vega.min
  - vega-lite.min
  - vega-embed.min
  - justcharts
---


# Interactive Plots Showing License Status Over Time

Consists of scatter plot and histogram.

<vegachart schema-url="{{ site.baseurl }}/assets/json/altair_license_dashboard.json" style="width: 100%"></vegachart>

The scatter plot visualizes the distribution of license statuses over time, with each point representing an individual license. The x-axis includes encoding the effective date using the temporal data type and the y-axis includes encoding the license status using the nominal data type. The color encoding is from the license status using nominal data type again to distinguish between the different license statuses easily. This allows for quick identification of patterns or trends in license status changes over time. Data transformations I did for this plot included converting the 'Effective Date' column to the datetime format and removing rows with invalid date entries.

The histogram under the scatter plot displays the frequency of these license statuses over time. The x-axis encodes the time in a year-month format once again using the temporal data type, while the y-axis represents the count of license statuses simply using "count()". The same color encoding I used for the scatter plot above is used in the histogram here. This allows viewers to see the overall distribution of license statuses count over time, along with the relative proportions of different license statuses in each time period. The data transformation for this plot involved aggregating the license counts in a year-month format, which was done implicitly using Altair's specific encoding.

The interactivity I chose for these plots are the brush and linking. You can select a time range on the histogram, then filtering the data in the scatter plot above for the chose time frame. This enhances the visualization in several ways by allowing viewers to focus on specific time periods of interest, giving them a detailed examination of license patterns during particular intervals. It also provides a way to deal with overflow in the scatter plot. While the scatter plot also includes a tooltip for each point, this can still be difficult to see and distinguish exactly which point you're looking at as this is a large dataset, so selecting a narrower time range spreads out the points and makes individual licenses more distinguishable and the tooltip more effective. Finally, this interaction creates a dynamic link between the two plots, allowing viewers to seamlessly explore both the trends and specific points. This combination of interactivity makes the visualization more engaging and informative, enabling viewers to uncover insights that might not be apparent in static representations of the data.


## Search The Data & Methods

<div class="left">
{% include elements/button.html link="https://github.com/UIUC-iSchool-DataViz/is445_data/raw/main/licenses_fall2022.csv" text="The Data" %}
</div>

<div class="right">
{% include elements/button.html link="https://github.com/jnaiman/online_cv_public/blob/main/python_notebooks/test_generate_plots.ipynb" text="The Analysis" %}
</div>

