<template>

<section>
<div>
    <div class="row">
  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>Annalise Keating</h2>
        <p class="title">CEO &amp; Founder</p>
        <p>711-2880 Nulla St. Mankato Mississippi 96522</p>
        <p>keatingfive@gmail.com</p>
        <p><button class="button">View</button></p>
        <p><button class="button">Add Friend</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>P.O. Box 283 8562 Fusce Rd.
Frederick Nebraska 20620</p>
        <p>mikeross@example.com</p>
        <p><button class="button">View</button></p>
        <p><button class="button">Add Friend</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">Designer</p>
        <p>606-3727 Ullamcorper. Street
Roseville NH 11523</p>
        <p>janee@example.com</p>
        <p><button class="button">View</button></p>
        <p><button class="button">Add Friend</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Ap #867-859 Sit Rd.
Azusa New York 39531</p>
        <p>example@example.com</p>
        <p><button class="button">View</button></p>
        <p><button class="button">Add Friend</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Kaia Gerber</h2>
        <p class="title">Designer</p>
        <p>7292 Dictum Av.
San Antonio MI 47096</p>
        <p>ekaiae@example.com</p>
        <p><button class="button">View</button></p>
        <p><button class="button">Add Friend</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
     
      <div class="container">
        <h2>Ann Perkins</h2>
        <p class="title">Designer</p>
        Ap #651-8679 Sodales Av.
Tamuning PA 10855
        <p>annperkins@example.com</p>
        <p><button class="button">View</button></p>
        <p><button class="button">Add Friend</button></p>
      </div>
    </div>
  </div>
</div>
<footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <span class="copyright">Copyright &copy; Music Hub 2020</span>
        </div>
        <div class="col-md-4">
          
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>
</section>
</template>

<style scoped>
/* Three columns side by side */

.column {
  float: left;
  margin-left: 0.7%;
  width: 32.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

/* Display the columns below each other instead of side by side on small screens */
@media screen and (max-width: 1200px) {
  .column {
    width: 100%;
    display: block;
  }
}

/* Add some shadows to create a card effect */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

/* Some left and right padding inside the container */
.container {
  padding: 0 16px;
}

/* Clear floats */
.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #CCCC00;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
</style>