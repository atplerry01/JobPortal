using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using JobPortal.Api.Models.Lookup;
using JobPortal.Api.Persistence;
using JobPortal.Api.ViewModel.Lookup;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.Api.Controllers
{
    [Route("api/lookups")]
    public class LookupsController : Controller
    {
        private readonly IMapper mapper;
        private readonly ApplicationDbContext context;

        public LookupsController(IMapper mapper, ApplicationDbContext context)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet("country")]
        public async Task<IEnumerable<CountryModel>> GetCountries()
        {
            var results = await context.Countries.ToListAsync();
            return mapper.Map<IEnumerable<Country>, IEnumerable<CountryModel>>(results);
        }

        [HttpGet("gender")]
        public async Task<IEnumerable<GenderModel>> GetGender()
        {
            var results = await context.Genders.ToListAsync();
            return mapper.Map<IEnumerable<Gender>, IEnumerable<GenderModel>>(results);
        }

        [HttpGet("states")]
        public async Task<IEnumerable<StateModel>> GetState()
        {
            var results = await context.States.Include(c => c.Country).ToListAsync();
            return mapper.Map<IEnumerable<State>, IEnumerable<StateModel>>(results);
        }

        [HttpGet("states/{countryId}")]
        public async Task<IEnumerable<StateModel>> GetState(int countryId)
        {
            var results = await context.States
                .Where(c => c.CountryId == countryId)
                .Include(c => c.Country)
                .ToListAsync();
            return mapper.Map<IEnumerable<State>, IEnumerable<StateModel>>(results);
        }

        [HttpGet("Cities")]
        public async Task<IEnumerable<CityModel>> GetCities()
        {
            var results = await context.Cities.ToListAsync();
            return mapper.Map<IEnumerable<City>, IEnumerable<CityModel>>(results);
        }

        [HttpGet("Cities/{stateId}")]
        public async Task<IEnumerable<CityModel>> GetCity(int stateId)
        {
            var results = await context.Cities
                .Include(s => s.State).ThenInclude(c => c.Country)
                .Where(s => s.StateId == stateId).ToListAsync();
            return mapper.Map<IEnumerable<City>, IEnumerable<CityModel>>(results);
        }


    }
}