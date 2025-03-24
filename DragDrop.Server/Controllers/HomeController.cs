using Microsoft.AspNetCore.Mvc;

namespace DragDrop.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("you made it here");
        }
    }
}
