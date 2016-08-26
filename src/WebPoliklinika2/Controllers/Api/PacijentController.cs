using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebPoliklinika2.Models.DbEntities;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;
using System.Net;

namespace WebPoliklinika2.Controllers.Api
{
    [Route("api/Pacijent")]
    public class PacijentController : Controller
    {
        private BazaPoliklinikaContext _baza = null;
        public PacijentController(BazaPoliklinikaContext baza)
        {
            _baza = baza;
        }

        // GET: api/Pacijent/GetPacijent
        [HttpGet("GetPacijent"), Produces("application/json")]
        public async Task<object> GetPacijent()
        {
            List<Pacijent> pacijenti = null;
            object result = null;
            try
            {
                using (_baza)
                {
                    pacijenti = await _baza.Pacijent.ToListAsync();
                    result = new
                    {
                        pacijenti
                    };
                }
            }
            catch (Exception ex)
            {
                ex.ToString();
            }
            return result;
        }

        // TODO GET DETAILS
        // GET api/Pacijent/GetPacijent/5
        [HttpGet, Route("GetPacijent/{id}")]
        public async Task<object> GetPacijent(int id)
        {
            object result = null;
            // int message = 0;
            Pacijent pacijent = null;

            try
            {
                using (_baza)
                {
                    pacijent = await _baza.Pacijent.FirstOrDefaultAsync(x => x.Id == id);
                    if (pacijent == null)
                    {
                        return BadRequest();
                    }
                    result = new
                    {
                        pacijent
                    };
                }
            }
            catch (Exception ex)
            {
                ex.ToString();
            }

            return result;
        }

        // POST api/Pacijent/PostPacijent
        [HttpPost, Route("PostPacijent")]
        public async Task<object> PostPacijent([FromBody]Pacijent model)
        {
            object result = null; int message = 0;
            if (model == null)
            {
                return BadRequest();
            }
            using (_baza)
            {
                using (var _bazaTransaction = _baza.Database.BeginTransaction())
                {
                    try
                    {
                        _baza.Pacijent.Add(model);
                        await _baza.SaveChangesAsync();
                        _bazaTransaction.Commit();

                        // TODO: response
                        //message = (int)responseMessage.Success;
                    }
                    catch (Exception ex)
                    {
                        _bazaTransaction.Rollback();
                        ex.ToString();

                        // TODO: response
                        // message = (int)responseMessage.Error;
                    }

                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }

        // PUT api/Pacijent/PutPacijent/5
        [HttpPut, Route("PutPacijent/{id}")]
        public async Task<object> PutPacijent(int id, [FromBody]Pacijent model)
        {
            object result = null;
            int messsage = 0;
            if (model == null)
            {
                return BadRequest();
            }
            using (_baza)
            {
                using (var _bazaTransaction = _baza.Database.BeginTransaction())
                {
                    try
                    {
                        var entityUpdate = _baza.Pacijent.FirstOrDefault(x => x.Id == id);
                        if (entityUpdate != null)
                        {
                            entityUpdate.Ime = model.Ime;
                            entityUpdate.Prezime = model.Prezime;
                            entityUpdate.Oib = model.Oib;
                            entityUpdate.DatumRodjenja = model.DatumRodjenja;
                            entityUpdate.Adresa = model.Adresa;
                            entityUpdate.Email = model.Email;
                            entityUpdate.KontaktBroj = model.KontaktBroj;

                            await _baza.SaveChangesAsync();
                        }

                        // TODO: response
                        // message = (int)responseMessage.Success;
                    }
                    catch (Exception ex)
                    {
                        _bazaTransaction.Rollback();
                        ex.ToString();

                        // TODO: response
                        // message = (int)responseMessage.Error;
                    }

                    result = new
                    {
                        messsage
                    };
                }
            }
            return result;
        }

        // DELETE api/Pacijent/DeletePacijentByID/5
        [HttpDelete, Route("DeletePacijentByID/{id}")]
        public async Task<object> Delete(int id)
        {
            object result = null;
            int message = 0;
            using (_baza)
            {
                using (var _bazaTransaction = _baza.Database.BeginTransaction())
                {
                    try
                    {
                        var idToRemove = _baza.Pacijent.SingleOrDefault(x => x.Id == id);
                        if (idToRemove != null)
                        {
                            _baza.Pacijent.Remove(idToRemove);
                            await _baza.SaveChangesAsync();
                        }
                        _bazaTransaction.Commit();

                        // TODO: response
                        // message = (int)responseMessage.Success;
                    }
                    catch (Exception ex)
                    {
                        _bazaTransaction.Rollback();
                        ex.ToString();

                        // TODO: response
                        // message = (int)responseMessage.Error;
                    }

                    result = new
                    {
                        message
                    };
                }
            }
           

            return result;
        }
    }
}
