export default interface PlantDetails {
	"varieties"?: any,
	"sub_species"?: any,
	"scientific_name"?: string,
	"order": {
		"slug"?: string,
		"name"?: string,
		"link"?: string,
		"id"?: number
	},
	"native_status"?: string,
	"main_species": {
		"year"?: string,
		"type"?: string,
		"synonym"?: string,
		"status"?: string,
		"specifications": {
			"toxicity"?: string,
			"shape_and_orientation"?: string,
			"regrowth_rate"?: string,
			"nitrogen_fixation"?: string,
			"max_height_at_base_age": {
				"ft"?: number,
				"cm"?: number
			},
			"mature_height": {
				"ft"?: number,
				"cm"?: number
			},
			"low_growing_grass"?: string,
			"lifespan"?: string,
			"leaf_retention"?: string,
			"known_allelopath"?: string,
			"growth_rate"?: string,
			"growth_period"?: string,
			"growth_habit"?: string,
			"growth_form"?: string,
			"fire_resistance"?: string,
			"fall_conspicuous"?: string,
			"coppice_potential"?: string,
			"c_n_ratio"?: string,
			"bloat"?: string
		},
		"sources": [
			{
				"species_id"?: number,
				"source_url"?: string,
				"name"?: string,
				"last_update"?: string
			}
		],
		"soils_adaptation": {
			"medium"?: string,
			"fine"?: string,
			"coarse"?: string
		},
		"slug"?: string,
		"seed": {
			"vegetative_spread_rate"?: string,
			"small_grain"?: string,
			"seeds_per_pound"?: string,
			"seedling_vigor"?: string,
			"seed_spread_rate"?: string,
			"commercial_availability"?: string,
			"bloom_period"?: string
		},
		"scientific_name"?: string,
		"propagation": {
			"tubers"?: string,
			"sprigs"?: string,
			"sod"?: string,
			"seed"?: string,
			"cuttings"?: string,
			"corms"?: string,
			"container"?: string,
			"bulbs"?: string,
			"bare_root"?: string
		},
		"products": {
			"veneer"?: string,
			"pulpwood"?: string,
			"protein_potential"?: string,
			"post"?: string,
			"palatable_human"?: string,
			"palatable_graze_animal"?: string,
			"palatable_browse_animal"?: string,
			"nursery_stock"?: string,
			"naval_store"?: string,
			"lumber"?: string,
			"fuelwood"?: string,
			"fodder"?: string,
			"christmas_tree"?: string,
			"berry_nut_seed"?: string
		},
		"native_status"?: string,
		"main_species_id"?: string,
		"is_main_species"?: string,
		"images": [
			{
				"url"?: string
			}
		],
		"id"?: number,
		"growth": {
			"temperature_minimum": {
				"deg_f"?: number,
				"deg_c"?: number
			},
			"shade_tolerance"?: string,
			"salinity_tolerance"?: string,
			"root_depth_minimum": {
				"inches"?: number,
				"cm"?: number
			},
			"resprout_ability"?: string,
			"precipitation_minimum": {
				"inches"?: number,
				"cm"?: number
			},
			"precipitation_maximum": {
				"inches"?: number,
				"cm"?: number
			},
			"planting_density_minimum": {
				"sqm"?: number,
				"acre"?: number
			},
			"planting_density_maximum": {
				"sqm"?: number,
				"acre"?: number
			},
			"ph_minimum"?: number,
			"ph_maximum"?: number,
			"moisture_use"?: string,
			"hedge_tolerance"?: string,
			"frost_free_days_minimum"?: number,
			"fire_tolerance"?: string,
			"fertility_requirement"?: string,
			"drought_tolerance"?: string,
			"cold_stratification_required"?: string,
			"caco_3_tolerance"?: string,
			"anaerobic_tolerance"?: string
		},
		"fruit_or_seed": {
			"seed_persistence"?: string,
			"seed_period_end"?: string,
			"seed_period_begin"?: string,
			"seed_abundance"?: string,
			"conspicuous"?: string,
			"color"?: string
		},
		"foliage": {
			"texture"?: string,
			"porosity_winter"?: string,
			"porosity_summer"?: string,
			"color"?: string
		},
		"flower": {
			"conspicuous"?: string,
			"color"?: string
		},
		"family_common_name"?: string,
		"duration"?: string,
		"complete_data"?: string,
		"common_name"?: string,
		"bibliography"?: string,
		"author"?: string
	},
	"images": [
		{
			"url"?: string
		}
	],
	"id"?: number,
	"hybrids"?: any,
	"genus": {
		"slug"?: string,
		"name"?: string,
		"link"?: string,
		"id"?: number
	},
	"forms"?: any,
	"family_common_name"?: string,
	"family": {
		"slug"?: string,
		"name"?: string,
		"link"?: string,
		"id"?: number,
		"common_name"?: string
	},
	"duration"?: string,
	"division": {
		"slug"?: string,
		"name"?: string,
		"link"?: string,
		"id"?: number
	},
	"cultivars"?: any,
	"common_name"?: string,
	"class": {
		"slug"?: string,
		"name"?: string,
		"link"?: string,
		"id"?: number
	}
}
